package com.service.problemmanagement.repository;

import com.service.problemmanagement.model.SolutionEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface SolutionRepository extends MongoRepository<SolutionEntity, String> {
    Optional<SolutionEntity> findByProblemIdAndLanguage(String problemId, String language);
    List<SolutionEntity> findByProblemId(String problemId);
    void deleteByProblemId(String problemId);
}