package com.service.problemmanagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.service.problemmanagement.model.Problem;

import java.util.Optional;

public interface ProblemRepository extends MongoRepository<Problem, String> {
    Optional<Problem> findBySlug(String slug);
}
