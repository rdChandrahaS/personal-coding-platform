package com.service.problemmanagement.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "solutions")
public class SolutionEntity {
    @Id
    private String id;
    private String problemId;
    private String language;
    private String code;
}