package com.example.resumebackend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "*")
public class ResumeController {

    @GetMapping("/api/profile")
    public Map<String, Object> getProfile() {

        Map<String, Object> profile = new HashMap<>();

        profile.put("name", "Nitin");
        profile.put("role", "B.Tech CSE Student");

        List<String> skills = Arrays.asList(
                "Java",
                "Spring Boot",
                "HTML",
                "CSS",
                "JavaScript");

        profile.put("skills", skills);

        return profile;
    }
}