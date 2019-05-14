package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@SpringBootApplication
public class ThymeleafTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThymeleafTestApplication.class, args);
	}

}
