package com.service.execution.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.service.execution.proto.CaseResult;
import com.service.execution.proto.ExecutionResult;
import com.service.execution.proto.RunRequest;
import com.service.execution.proto.SubmissionResponse;
import com.service.problemmanagement.proto.Problem;
import com.service.problemmanagement.proto.TestCase;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SubmissionOrchestrationService {

    private final DockerExecutionService executor;
    private final RestTemplate restTemplate;

    @Value("${problem.service.url}")
    private String problemServiceUrl;

    public ResponseEntity<SubmissionResponse> processSubmission(String problemId, RunRequest req) {
        // 1. Fetch Problem and Test Cases from Problem Service via Protobuf
        String url = problemServiceUrl + "/api/problems/" + problemId;
        ResponseEntity<Problem> response;
        try {
            response = restTemplate.getForEntity(url, Problem.class);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }

        Problem problem = response.getBody();
        if (problem == null || problem.getTestsCount() == 0) {
            return ResponseEntity.notFound().build();
        }

        // 2. Execute Code against Test Cases
        SubmissionResponse.Builder subBuilder = SubmissionResponse.newBuilder();
        boolean allAccepted = true;
        int caseNumber = 1;

        for (TestCase tc : problem.getTestsList()) {
            ExecutionResult runResult = executor.run(req.getLanguage(), req.getCode(), tc.getInput());

            String actual = runResult.getStdout().trim();
            String expected = tc.getExpectedOutput().trim();
            boolean passed = runResult.getStatus().equals("SUCCESS") && actual.equals(expected);

            allAccepted &= passed;

            CaseResult.Builder caseBuilder = CaseResult.newBuilder()
                    .setCaseNumber(caseNumber++)
                    .setPassed(passed)
                    .setExecutionStatus(runResult.getStatus())
                    .setActual(actual);

            // Hide expected output from payload if the test case is marked hidden
            if (!tc.getHidden()) {
                caseBuilder.setExpected(expected);
            }

            subBuilder.addResults(caseBuilder.build());

            if (!passed) {
                break;
            }
        }

        subBuilder.setStatus(allAccepted ? "ACCEPTED" : "WRONG_ANSWER");
        return ResponseEntity.ok(subBuilder.build());
    }
}