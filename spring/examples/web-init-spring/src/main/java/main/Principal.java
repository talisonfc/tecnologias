package main;

import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.support.XmlWebApplicationContext;

import model.Produto;

/**
 * Este metodo, configura o ponto de partida da aplicacao.
 * O Spring fornece uma classe de inicializacao que rebece uma classe de configuracao.
 * Para criar a classe de configuracao usando anotacoes, devemos anotar a classe com @Configuration e @SpringBootApplocation
 * Um SpringBootApplication, inicial as configuracoes para rodar um servidor web simples
 * Para criar as dependencias, devemos adicionar a classe de configuracao, a anotation @ComponentScan(basePackages=<name+package>))
 * 
 */
//@Configuration
//@ComponentScan(basePackages = "model")
//@SpringBootApplication
//public class Principal {
//
//	public static void main(String[] args) {
//		
//		SpringApplication app = new SpringApplication(Principal.class);
//		app.setBannerMode(Banner.Mode.OFF);
//		app.run(args);
//		
//	}
//
//}

public class Principal {

	public static void main(String[] args) {
		/**
		 * Criando contexto a partir de uma classe anotado com @Configuration e melhos beans anotados com @Bean
		 * Para criar o contexto, usamos a classe AnnotationConfigApplicationContext(classe anotada com @Configuration)
		 */
		ApplicationContext contexto = new AnnotationConfigApplicationContext(AppConfig.class);
		Produto p1 = contexto.getBean(Produto.class);
		p1.setNome("Cuzcuz");
		Produto p2 = contexto.getBean(Produto.class);
		
		System.out.println(p1);
		System.out.println(p2);
	}

}
