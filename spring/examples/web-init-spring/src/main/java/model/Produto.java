package model;

import org.springframework.stereotype.Component;

@Component
public class Produto {

	private Integer id;
	private String nome;
	
	public Produto() {
		System.err.println("PRODUTO");
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return "Produto [id=" + id + ", nome=" + nome + "]";
	}
	
	
	
}
