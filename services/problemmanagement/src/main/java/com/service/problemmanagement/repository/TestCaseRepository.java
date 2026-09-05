package com.service.problemmanagement.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.service.problemmanagement.model.TestCase;

public interface TestCaseRepository extends MongoRepository<TestCase, String> {
    List<TestCase> findByProblemId(String problemId);
    void deleteByProblemId(String problemId);
}
