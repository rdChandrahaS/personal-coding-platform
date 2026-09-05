package com.service.problemmanagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.service.problemmanagement.proto.ProblemListResponse;
import com.service.problemmanagement.service.ProblemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/problems")
@RequiredArgsConstructor
public class ProblemController {

    private final ProblemService problemService;

    @GetMapping(produces = "application/x-protobuf")
    public ProblemListResponse listProblems() {
        return problemService.listProblems();
    }

    @GetMapping(value = "/{id}", produces = "application/x-protobuf")
    public ResponseEntity<com.service.problemmanagement.proto.Problem> getProblem(@PathVariable("id") String id) {
        com.service.problemmanagement.proto.Problem problem = problemService.getProblem(id);
        if (problem == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(problem);
    }

    @PostMapping(consumes = "application/x-protobuf", produces = "application/x-protobuf")
    public com.service.problemmanagement.proto.Problem createProblem(@RequestBody com.service.problemmanagement.proto.Problem request) {
        return problemService.createProblem(request);
    }

    @PutMapping(value = "/{id}", consumes = "application/x-protobuf", produces = "application/x-protobuf")
    public ResponseEntity<com.service.problemmanagement.proto.Problem> updateProblem(
            @PathVariable("id") String id, 
            @RequestBody com.service.problemmanagement.proto.Problem request) {
        
        com.service.problemmanagement.proto.Problem updated = problemService.updateProblem(id, request);
        if (updated == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProblem(@PathVariable("id") String id) {
        if (!problemService.deleteProblem(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
}