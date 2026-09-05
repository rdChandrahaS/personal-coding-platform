package com.service.problemmanagement.model;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "problems")
public class Problem {
    @Id
    private String id;
    private String title;
    private String slug;
    private String difficulty = "MEDIUM";
    private String description = "";
    private String examples = ""; 
    private String constraints = "";
    private String intuition = "";
    private String approach = "";
    private String timeComplexity = "";
    private String spaceComplexity = "";
    private List<String> topics = new ArrayList<>();
    private Instant createdAt = Instant.now();
    private Instant updatedAt = Instant.now();
}