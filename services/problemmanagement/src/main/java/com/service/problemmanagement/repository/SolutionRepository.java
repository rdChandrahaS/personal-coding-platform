package com.service.problemmanagement.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.service.problemmanagement.model.Solution;

public interface SolutionRepository extends MongoRepository<Solution, String> {
    Optional<Solution> findByProblemIdAndLanguage(String problemId, String language);
    List<Solution> findByProblemId(String problemId);
    void deleteByProblemId(String problemId);
}
