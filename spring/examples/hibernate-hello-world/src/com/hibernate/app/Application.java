package com.hibernate.app;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import com.hibernate.model.Pessoa;

import antlr.InputBuffer;

public class Application {
	
	public static void main(String[] args) {
		System.out.println("Application start point");
		
		StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
				.configure(new File("hibernate.cfg.xml"))
				.build();
		
		SessionFactory sessionFactory = new MetadataSources(registry)
				.buildMetadata().buildSessionFactory();
		
		
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		session.save(new Pessoa("talismar fernandes"));
		session.getTransaction().commit();
		session.close();
		
		StandardServiceRegistryBuilder.destroy(registry);
	}
}
