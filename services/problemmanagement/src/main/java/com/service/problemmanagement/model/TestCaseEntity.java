package com.service.problemmanagement.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "test_cases")
public class TestCaseEntity {
    @Id
    private String id;
    private String problemId;
    private String input;
    private String expectedOutput;
    private boolean hidden;
}