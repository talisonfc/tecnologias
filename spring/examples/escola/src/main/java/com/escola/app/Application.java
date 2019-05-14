package com.escola.app;

import java.io.File;
import java.sql.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.escola.model.Endereco;
import com.escola.model.Pessoa;
import com.escola.repository.EnderecoRepository;
import com.escola.repository.PessoaRepository;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		//SpringApplication.run(Application.class, args);
		
		StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
				.configure(new File("hibernate.cfg.xml"))
				.build();
		
		SessionFactory sessionFactory = new MetadataSources(registry)
				.buildMetadata().buildSessionFactory();
		
		Endereco endereco = new Endereco();
		endereco.setRua("Joao Paulo");
		endereco.setCep("58114-150");

		Pessoa pessoa = new Pessoa();
		pessoa.setNome("Talison F Costa");
		pessoa.setNascimento(new Date(1993, 3, 30));
		pessoa.getPhones().add("(84) 99819-6359");
		pessoa.getEnderecos().add(endereco);
		
		PessoaRepository pessoaRepository = new PessoaRepository(sessionFactory);
		pessoaRepository.add(pessoa);
		
		StandardServiceRegistryBuilder.destroy(registry);
		
	}

}
