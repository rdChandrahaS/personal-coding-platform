package com.service.problemmanagement.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document(collection = "problems")
public class ProblemEntity {
    @Id
    private String id;
    private String title;
    private String slug;
    private String difficulty;
    private String description;
    private String examples;
    private String constraints;
    private String intuition;
    private String approach;
    private String timeComplexity;
    private String spaceComplexity;
    private List<String> topics;
}