package main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import model.Cliente;
import model.Endereco;
import model.Pessoa;

public class main {

	public static void main(String[] args) {
		ApplicationContext contexto = new ClassPathXmlApplicationContext("static/model.xml");
		
		Cliente p = (Cliente) contexto.getBean("modelCliente");
		p.setName("Talison Fernandes Costa");
		p.setCpf("083.295.224-90");
		System.out.println(p);
		
		Cliente a = contexto.getBean(Cliente.class);
		Cliente b = contexto.getBean(Cliente.class);
		
		System.out.println(a);
		System.out.println(b);
		
		Endereco e = contexto.getBean(Endereco.class);
		System.out.println(e);
	}

}
