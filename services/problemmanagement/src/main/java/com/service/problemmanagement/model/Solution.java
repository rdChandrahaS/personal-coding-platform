package com.service.problemmanagement.model;

import java.time.Instant;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "solutions")
public class Solution {
    @Id
    private String id;
    private String problemId;
    private String language;
    private String code = "";
    private Instant updatedAt = Instant.now();
}