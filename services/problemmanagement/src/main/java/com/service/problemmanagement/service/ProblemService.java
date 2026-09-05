package com.service.problemmanagement.service;

import java.time.Instant;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.service.problemmanagement.model.Problem;
import com.service.problemmanagement.model.Solution;
import com.service.problemmanagement.model.TestCase;
import com.service.problemmanagement.proto.ProblemListResponse;
import com.service.problemmanagement.repository.ProblemRepository;
import com.service.problemmanagement.repository.SolutionRepository;
import com.service.problemmanagement.repository.TestCaseRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProblemService {

    private final ProblemRepository problems;
    private final SolutionRepository solutions;
    private final TestCaseRepository tests;

    public ProblemListResponse listProblems() {
        List<com.service.problemmanagement.proto.Problem> protoProblems = problems.findAll().stream()
                .map(this::toProto)
                .collect(Collectors.toList());
        return ProblemListResponse.newBuilder().addAllProblems(protoProblems).build();
    }

    public com.service.problemmanagement.proto.Problem getProblem(String id) {
        return problems.findById(id).map(this::toProto).orElse(null);
    }

    public com.service.problemmanagement.proto.Problem createProblem(com.service.problemmanagement.proto.Problem protoRequest) {
        Problem model = new Problem();
        updateModelFromProto(model, protoRequest);
        model.setSlug(uniqueSlug(protoRequest.getTitle(), null));
        model = problems.save(model);
        syncSolutions(model.getId(), protoRequest.getSolutionsList());
        syncTestCases(model.getId(), protoRequest.getTestsList());
        return toProto(model);
    }

    public com.service.problemmanagement.proto.Problem updateProblem(String id, com.service.problemmanagement.proto.Problem protoRequest) {
        return problems.findById(id).map(model -> {
            updateModelFromProto(model, protoRequest);
            model.setSlug(uniqueSlug(protoRequest.getTitle(), model.getId()));
            model.setUpdatedAt(Instant.now());
            model = problems.save(model);
            syncSolutions(model.getId(), protoRequest.getSolutionsList());
            syncTestCases(model.getId(), protoRequest.getTestsList());
            return toProto(model);
        }).orElse(null);
    }

    public boolean deleteProblem(String id) {
        if (!problems.existsById(id)) return false;
        solutions.deleteByProblemId(id);
        tests.deleteByProblemId(id);
        problems.deleteById(id);
        return true;
    }

    // --- Mapping Utilities ---

    private com.service.problemmanagement.proto.Problem toProto(Problem model) {
        com.service.problemmanagement.proto.Problem.Builder builder = com.service.problemmanagement.proto.Problem.newBuilder()
                .setId(model.getId() == null ? "" : model.getId())
                .setTitle(model.getTitle() == null ? "" : model.getTitle())
                .setSlug(model.getSlug() == null ? "" : model.getSlug())
                .setDifficulty(com.service.problemmanagement.proto.Difficulty.valueOf(model.getDifficulty()))
                .setDescription(model.getDescription() == null ? "" : model.getDescription())
                .setExamples(model.getExamples() == null ? "" : model.getExamples())
                .setConstraints(model.getConstraints() == null ? "" : model.getConstraints())
                .setIntuition(model.getIntuition() == null ? "" : model.getIntuition())
                .setApproach(model.getApproach() == null ? "" : model.getApproach())
                .setTimeComplexity(model.getTimeComplexity() == null ? "" : model.getTimeComplexity())
                .setSpaceComplexity(model.getSpaceComplexity() == null ? "" : model.getSpaceComplexity())
                .addAllTopics(model.getTopics());

        // Attach associated data
        solutions.findByProblemId(model.getId()).forEach(sol -> 
            builder.addSolutions(com.service.problemmanagement.proto.Solution.newBuilder()
                .setId(sol.getId() == null ? "" : sol.getId())
                .setProblemId(sol.getProblemId() == null ? "" : sol.getProblemId())
                .setLanguage(com.service.problemmanagement.proto.Language.valueOf(sol.getLanguage()))
                .setCode(sol.getCode() == null ? "" : sol.getCode())
                .build())
        );

        tests.findByProblemId(model.getId()).forEach(test -> 
            builder.addTests(com.service.problemmanagement.proto.TestCase.newBuilder()
                .setId(test.getId() == null ? "" : test.getId())
                .setProblemId(test.getProblemId() == null ? "" : test.getProblemId())
                .setInput(test.getInput() == null ? "" : test.getInput())
                .setExpectedOutput(test.getExpectedOutput() == null ? "" : test.getExpectedOutput())
                .setHidden(test.isHidden())
                .build())
        );

        return builder.build();
    }

    private void updateModelFromProto(Problem model, com.service.problemmanagement.proto.Problem proto) {
        model.setTitle(proto.getTitle());
        model.setDifficulty(proto.getDifficulty().name());
        model.setDescription(proto.getDescription());
        model.setExamples(proto.getExamples());
        model.setConstraints(proto.getConstraints());
        model.setIntuition(proto.getIntuition());
        model.setApproach(proto.getApproach());
        model.setTimeComplexity(proto.getTimeComplexity());
        model.setSpaceComplexity(proto.getSpaceComplexity());
        model.setTopics(proto.getTopicsList());
    }

    /**
     * Persists the solutions embedded in the incoming proto Problem, treating the
     * list as the complete, authoritative set of solutions for this problem: existing
     * solutions are updated in place, new languages are created, and any language that
     * was previously saved but is no longer present in the incoming list is removed.
     */
    private void syncSolutions(String problemId, List<com.service.problemmanagement.proto.Solution> incoming) {
        Map<String, Solution> existingByLanguage = new HashMap<>();
        solutions.findByProblemId(problemId).forEach(s -> existingByLanguage.put(s.getLanguage(), s));

        Set<String> keepLanguages = new HashSet<>();
        for (com.service.problemmanagement.proto.Solution protoSolution : incoming) {
            String language = protoSolution.getLanguage().name();
            keepLanguages.add(language);

            Solution solution = existingByLanguage.get(language);
            if (solution == null) {
                solution = new Solution();
                solution.setProblemId(problemId);
                solution.setLanguage(language);
            }
            solution.setCode(protoSolution.getCode());
            solution.setUpdatedAt(Instant.now());
            solutions.save(solution);
        }

        existingByLanguage.forEach((language, solution) -> {
            if (!keepLanguages.contains(language)) {
                solutions.deleteById(solution.getId());
            }
        });
    }

    /**
     * Persists the test cases embedded in the incoming proto Problem, treating the
     * list as the complete, authoritative set of test cases for this problem: entries
     * with a known id are updated in place, entries with no id (or an unknown id) are
     * created, and any previously saved test case missing from the incoming list is removed.
     */
    private void syncTestCases(String problemId, List<com.service.problemmanagement.proto.TestCase> incoming) {
        Map<String, TestCase> existingById = new HashMap<>();
        tests.findByProblemId(problemId).forEach(t -> existingById.put(t.getId(), t));

        Set<String> keepIds = new HashSet<>();
        for (com.service.problemmanagement.proto.TestCase protoTest : incoming) {
            TestCase testCase = existingById.get(protoTest.getId());
            if (testCase == null) {
                testCase = new TestCase();
                testCase.setProblemId(problemId);
            }
            testCase.setInput(protoTest.getInput());
            testCase.setExpectedOutput(protoTest.getExpectedOutput());
            testCase.setHidden(protoTest.getHidden());
            testCase = tests.save(testCase);
            keepIds.add(testCase.getId());
        }

        existingById.forEach((id, testCase) -> {
            if (!keepIds.contains(id)) {
                tests.deleteById(id);
            }
        });
    }

    private String uniqueSlug(String title, String currentId) {
        String base = title.toLowerCase(Locale.ROOT).replaceAll("[^a-z0-9]+", "-").replaceAll("(^-|-$)", "");
        if (base.isBlank()) base = "problem";
        String slug = base;
        int i = 2;
        while (problems.findBySlug(slug).filter(p -> currentId == null || !p.getId().equals(currentId)).isPresent()) {
            slug = base + "-" + (i++);
        }
        return slug;
    }
}