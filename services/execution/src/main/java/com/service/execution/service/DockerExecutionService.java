package com.service.execution.service;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.service.execution.proto.ExecutionResult;

@Service
public class DockerExecutionService {

    @Value("${app.runner.image}") private String image;
    @Value("${app.runner.timeout-ms}") private long timeoutMs;
    @Value("${app.runner.memory-mb}") private int memoryMb;
    @Value("${app.runner.cpu}") private double cpu;

    public ExecutionResult run(String language, String code, String input) {
        if (code == null || code.isBlank()) {
            return buildResult("ERROR", "Code is empty", "", 0);
        }

        String lang = language.toLowerCase(Locale.ROOT);
        Path dir = null;

        try {
            dir = Files.createTempDirectory("dsa-run-");
            List<String> command = commandFor(lang);
            writeFiles(dir, lang, code);

            List<String> docker = new ArrayList<>(List.of(
                "docker", "run", "--rm", "--network", "none",
                "--cpus", String.valueOf(cpu), 
                "--memory", memoryMb + "m", 
                "--pids-limit", "128", 
                "--read-only", 
                "--tmpfs", "/tmp:rw,nosuid,nodev", 
                "--cap-drop", "ALL", 
                "--security-opt", "no-new-privileges", 
                "-v", dir.toAbsolutePath() + ":/workspace:rw", 
                "-w", "/workspace", image
            ));
            docker.addAll(command);

            Process p = new ProcessBuilder(docker).redirectErrorStream(false).start();
            try (OutputStream os = p.getOutputStream()) { 
                os.write((input == null ? "" : input).getBytes(StandardCharsets.UTF_8)); 
            }

            ExecutorService pool = Executors.newFixedThreadPool(2);
            Future<String> out = pool.submit(() -> read(p.getInputStream())); 
            Future<String> err = pool.submit(() -> read(p.getErrorStream()));

            boolean finished = p.waitFor(timeoutMs, TimeUnit.MILLISECONDS);
            if (!finished) {
                p.destroyForcibly(); 
                return buildResult("TIMEOUT", "Execution timed out", safeGet(err), timeoutMs);
            }

            String stdout = safeGet(out);
            String stderr = safeGet(err); 
            pool.shutdownNow();

            return buildResult(p.exitValue() == 0 ? "SUCCESS" : "RUNTIME_ERROR", stdout, stderr, timeoutMs);

        } catch (IOException e) { 
            return buildResult("ERROR", "Unable to start Docker: " + e.getMessage(), "", 0); 
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); 
            return buildResult("ERROR", "Execution interrupted", "", 0);
        } finally { 
            if (dir != null) {
                try { deleteTree(dir); } catch (IOException ignored) {}
            }
        }
    }

    private ExecutionResult buildResult(String status, String stdout, String stderr, long time) {
        return ExecutionResult.newBuilder()
                .setStatus(status)
                .setStdout(stdout)
                .setStderr(stderr)
                .setExecutionTimeMs(time)
                .build();
    }

    private List<String> commandFor(String l) {
        return switch (l) {
            case "python" -> List.of("uv", "run", "main.py");
            case "java" -> List.of("sh", "-lc", "javac Main.java && java Main");
            case "c" -> List.of("sh", "-lc", "gcc -O2 -std=c17 main.c -o main && ./main");
            case "cpp", "c++" -> List.of("sh", "-lc", "g++ -O2 -std=c++20 main.cpp -o main && ./main");
            default -> throw new IllegalArgumentException("Unsupported language: " + l);
        };
    }

    private void writeFiles(Path dir, String l, String code) throws IOException {
        switch (l) {
            case "python" -> Files.writeString(dir.resolve("main.py"), code);
            case "java" -> Files.writeString(dir.resolve("Main.java"), code);
            case "c" -> Files.writeString(dir.resolve("main.c"), code);
            case "cpp", "c++" -> Files.writeString(dir.resolve("main.cpp"), code);
            default -> throw new IllegalArgumentException("Unsupported language: " + l);
        }
    }

    private String read(InputStream in) throws IOException {
        return new String(in.readAllBytes(), StandardCharsets.UTF_8);
    }

    private String safeGet(Future<String> f) {
        try { return f.get(100, TimeUnit.MILLISECONDS); } catch (Exception e) { return ""; }
    }

    private void deleteTree(Path root) throws IOException {
        try (var s = Files.walk(root)) {
            s.sorted(Comparator.reverseOrder()).forEach(p -> {
                try { Files.deleteIfExists(p); } catch (IOException ignored) {}
            });
        }
    }
}