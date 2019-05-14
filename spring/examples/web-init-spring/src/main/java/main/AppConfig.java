package main;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import model.Pessoa;
import model.Produto;

@Configuration
public class AppConfig {

	@Bean
	public Produto getProduto() {
		System.out.println("Bean method PRODUTO");
		return new Produto();
	}
	
	@Bean
	public Pessoa getPessoa() {
		System.out.println("Bean method PRODUTO");
		return new Pessoa();
	}
}
