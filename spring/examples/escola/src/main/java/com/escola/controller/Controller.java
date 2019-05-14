package com.escola.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.escola.repository.Repository;

public class Controller<T> {
	
	Repository<T> repository;
	
	public Controller(Repository<T> repository) {
		this.repository = repository;
	}
	
	
	public void addEntity(T obj) {
		repository.add(obj);
	}
	
	
}
