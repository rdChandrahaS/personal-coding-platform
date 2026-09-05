package com.service.problemmanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "test_cases")
public class TestCase {
    @Id
    private String id;
    private String problemId;
    private String input = "";
    private String expectedOutput = "";
    private boolean hidden;
}