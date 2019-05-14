package model;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class Pessoa {
	
	private Integer id;
	private String nome;
	private String nascimento;
	private String cpf;
	
	@Autowired
	private ApplicationContext ctx;

	public Pessoa() {
		this.init();
		System.err.println(this.toString());
	}
	
	public void init() {
		this.nome="talison fernandes";
	}

	@Override
	public String toString() {
		return "Pessoa [nome=" + nome + ", nascimento=" + nascimento + ", cpf=" + cpf + "]";
	}
	
	
}
