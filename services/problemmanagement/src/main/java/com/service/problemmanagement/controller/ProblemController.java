package com.service.problemmanagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.service.problemmanagement.service.ProblemService;
import com.service.problemmanagement.proto.Problem;
import com.service.problemmanagement.proto.ProblemListResponse;
import lombok.RequiredArgsConstructor;

@RestController 
@RequestMapping ("/api/problems")
@RequiredArgsConstructor
public class ProblemController {

    private final ProblemService problemService;

    @GetMapping (produces = "application/x-protobuf")
    public ProblemListResponse listProblems(
            @RequestParam (required = false) String q,
            @RequestParam(required = false) String difficulty) {
        return problemService.listProblems(q, difficulty);
    }

    @GetMapping(value = "/{id}", produces = "application/x-protobuf")
    public ResponseEntity<Problem> getProblem(@PathVariable String id) {
        try {
            return ResponseEntity.ok(problemService.getProblem(id));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping (consumes = "application/x-protobuf", produces = "application/x-protobuf")
    public Problem createProblem(@RequestBody Problem problem) {
        return problemService.saveProblem(null, problem);
    }

    @PutMapping(value = "/{id}", consumes = "application/x-protobuf", produces = "application/x-protobuf")
    public Problem updateProblem(@PathVariable String id, @RequestBody Problem problem) {
        return problemService.saveProblem(id, problem);
    }

    @DeleteMapping ("/{id}")
    public ResponseEntity<Void> deleteProblem(@PathVariable String id) {
        problemService.deleteProblem(id);
        return ResponseEntity.ok().build();
    }
}