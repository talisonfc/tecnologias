package main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import model.Pessoa;
import repository.PessoaRepository;

@SpringBootApplication
@ComponentScan("controller")
@EntityScan("model")
@EnableJpaRepositories("repository")
public class SpringDataApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(SpringDataApplication.class, args);
	}

}
