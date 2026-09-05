package com.service.execution.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.execution.proto.ExecutionResult;
import com.service.execution.proto.RunRequest;
import com.service.execution.proto.SubmissionResponse;
import com.service.execution.service.DockerExecutionService;
import com.service.execution.service.SubmissionOrchestrationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/execute")
@RequiredArgsConstructor
public class ExecutionController {

    private final DockerExecutionService dockerExecutionService;
    private final SubmissionOrchestrationService submissionOrchestrationService;

    @PostMapping(value = "/run", consumes = "application/x-protobuf", produces = "application/x-protobuf")
    public ExecutionResult run(@RequestBody RunRequest req) {
        return dockerExecutionService.run(req.getLanguage(), req.getCode(), req.getInput());
    }

    @PostMapping(value = "/submit/{problemId}", consumes = "application/x-protobuf", produces = "application/x-protobuf")
    public ResponseEntity<SubmissionResponse> submit(@PathVariable("problemId") String problemId, @RequestBody RunRequest req) {
        return submissionOrchestrationService.processSubmission(problemId, req);
    }
}