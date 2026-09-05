package com.service.problemmanagement.repository;

import com.service.problemmanagement.model.TestCaseEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TestCaseRepository extends MongoRepository<TestCaseEntity, String> {
    List<TestCaseEntity> findByProblemId(String problemId);
    void deleteByProblemId(String problemId);
}