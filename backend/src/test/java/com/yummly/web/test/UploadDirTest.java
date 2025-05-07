package com.yummly.web.test;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@SpringBootApplication
public class UploadDirTest {

    public static void main(String[] args) {
        SpringApplication.run(UploadDirTest.class, args);
    }

    @Bean
    public CommandLineRunner testUploadDir(@Value("${file.upload-dir}") String uploadDir) {
        return args -> {
            System.out.println("Upload directory property value: " + uploadDir);
            Path path = Paths.get(uploadDir);
            if (Files.exists(path)) {
                System.out.println("Directory exists!");
                System.out.println("Absolute path: " + path.toAbsolutePath());
                System.out.println("Contents:");
                Files.list(path).forEach(file -> System.out.println("- " + file.getFileName()));
            } else {
                System.out.println("Directory does not exist. Creating...");
                try {
                    Files.createDirectories(path);
                    System.out.println("Directory created successfully at: " + path.toAbsolutePath());
                } catch (Exception e) {
                    System.err.println("Failed to create directory: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        };
    }
} 