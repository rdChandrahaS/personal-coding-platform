package com.service.problemmanagement.repository;

import com.service.problemmanagement.model.ProblemEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProblemRepository extends MongoRepository<ProblemEntity, String> {
    
}