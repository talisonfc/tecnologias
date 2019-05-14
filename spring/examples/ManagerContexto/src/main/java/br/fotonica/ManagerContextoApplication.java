package br.fotonica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ManagerContextoApplication {

	public static void main(String[] args) {
		ApplicationContext app = new ClassPathXmlApplicationContext("spring.xml");
		
		ClasseA ca = app.getBean(ClasseA.class);
		ca.setA("Joao e Maria");
		
		System.out.println(ca);
		
		ClasseB cb = app.getBean(ClasseB.class);
		
		System.out.println(cb);
	}

}
