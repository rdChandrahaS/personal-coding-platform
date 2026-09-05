package com.service.problemmanagement.service;

import com.service.problemmanagement.model.*;
import com.service.problemmanagement.repository.*;
import com.service.problemmanagement.proto.Problem;
import com.service.problemmanagement.proto.ProblemListResponse;
import com.service.problemmanagement.proto.Solution;
import com.service.problemmanagement.proto.TestCase;
import com.service.problemmanagement.proto.Difficulty;
import com.service.problemmanagement.proto.Language;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProblemService {

    private final ProblemRepository problemRepo;
    private final SolutionRepository solutionRepo;
    private final TestCaseRepository testCaseRepo;

    // Resolves Issue #3: Search Query and Difficulty Filtering
    public ProblemListResponse listProblems(String q, String difficulty) {
        List<ProblemEntity> all = problemRepo.findAll();
        
        List<Problem> filtered = all.stream()
            .filter(p -> q == null || q.isBlank() || p.getTitle().toLowerCase().contains(q.toLowerCase()))
            .filter(p -> difficulty == null || difficulty.isBlank() || p.getDifficulty().equalsIgnoreCase(difficulty))
            .map(this::toProto)
            .toList();
            
        return ProblemListResponse.newBuilder().addAllProblems(filtered).build();
    }

    public Problem getProblem(String id) {
        ProblemEntity entity = problemRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Problem not found"));
        return toProto(entity);
    }

    // Resolves Issues #8 and #9: Entity Relationships and Validation
    public Problem saveProblem(String id, Problem proto) {
        if (proto.getTitle() == null || proto.getTitle().isBlank()) {
            throw new IllegalArgumentException("Title is required");
        }

        ProblemEntity entity = id != null ? problemRepo.findById(id).orElse(new ProblemEntity()) : new ProblemEntity();
        
        entity.setTitle(proto.getTitle());
        entity.setSlug(proto.getTitle().toLowerCase().replace(" ", "-").replaceAll("[^a-z0-9-]", ""));
        entity.setDifficulty(proto.getDifficulty().name());
        entity.setDescription(proto.getDescription());
        entity.setExamples(proto.getExamples());
        entity.setConstraints(proto.getConstraints());
        entity.setIntuition(proto.getIntuition());
        entity.setApproach(proto.getApproach());
        entity.setTimeComplexity(proto.getTimeComplexity());
        entity.setSpaceComplexity(proto.getSpaceComplexity());
        entity.setTopics(proto.getTopicsList());

        entity = problemRepo.save(entity);

        // Resolves Issue #1: Actually persist the solutions and test cases
        updateSolutions(entity.getId(), proto.getSolutionsList());
        updateTestCases(entity.getId(), proto.getTestsList());

        return toProto(entity);
    }

    public void deleteProblem(String id) {
        problemRepo.deleteById(id);
        solutionRepo.deleteByProblemId(id);
        testCaseRepo.deleteByProblemId(id);
    }

    private void updateSolutions(String problemId, List<Solution> protos) {
        for (Solution proto : protos) {
            SolutionEntity sol = solutionRepo.findByProblemIdAndLanguage(problemId, proto.getLanguage().name())
                .orElse(new SolutionEntity());
            sol.setProblemId(problemId);
            sol.setLanguage(proto.getLanguage().name());
            sol.setCode(proto.getCode());
            solutionRepo.save(sol);
        }
    }

    private void updateTestCases(String problemId, List<TestCase> protos) {
        // Wipe existing test cases to cleanly sync the exact array sent from the UI
        testCaseRepo.deleteByProblemId(problemId);
        
        for (TestCase proto : protos) {
            TestCaseEntity tc = new TestCaseEntity();
            tc.setProblemId(problemId);
            tc.setInput(proto.getInput());
            tc.setExpectedOutput(proto.getExpectedOutput());
            tc.setHidden(proto.getHidden());
            testCaseRepo.save(tc);
        }
    }

    private Problem toProto(ProblemEntity entity) {
        Problem.Builder builder = Problem.newBuilder()
            .setId(entity.getId() != null ? entity.getId() : "")
            .setTitle(entity.getTitle() != null ? entity.getTitle() : "")
            .setSlug(entity.getSlug() != null ? entity.getSlug() : "")
            .setDifficulty(Difficulty.valueOf(entity.getDifficulty() != null ? entity.getDifficulty() : "MEDIUM"))
            .setDescription(entity.getDescription() != null ? entity.getDescription() : "")
            .setExamples(entity.getExamples() != null ? entity.getExamples() : "")
            .setConstraints(entity.getConstraints() != null ? entity.getConstraints() : "")
            .setIntuition(entity.getIntuition() != null ? entity.getIntuition() : "")
            .setApproach(entity.getApproach() != null ? entity.getApproach() : "")
            .setTimeComplexity(entity.getTimeComplexity() != null ? entity.getTimeComplexity() : "")
            .setSpaceComplexity(entity.getSpaceComplexity() != null ? entity.getSpaceComplexity() : "");

        if (entity.getTopics() != null) {
            builder.addAllTopics(entity.getTopics());
        }

        if (entity.getId() != null) {
            List<Solution> sols = solutionRepo.findByProblemId(entity.getId()).stream()
                .map(s -> Solution.newBuilder()
                    .setId(s.getId() != null ? s.getId() : "")
                    .setProblemId(s.getProblemId())
                    .setLanguage(Language.valueOf(s.getLanguage()))
                    .setCode(s.getCode() != null ? s.getCode() : "")
                    .build())
                .toList();
            builder.addAllSolutions(sols);

            List<TestCase> tcs = testCaseRepo.findByProblemId(entity.getId()).stream()
                .map(tc -> TestCase.newBuilder()
                    .setId(tc.getId() != null ? tc.getId() : "")
                    .setProblemId(tc.getProblemId())
                    .setInput(tc.getInput() != null ? tc.getInput() : "")
                    .setExpectedOutput(tc.getExpectedOutput() != null ? tc.getExpectedOutput() : "")
                    .setHidden(tc.isHidden())
                    .build())
                .toList();
            builder.addAllTests(tcs);
        }

        return builder.build();
    }
}