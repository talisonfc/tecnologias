package model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="pessoa")
public class Pessoa {

	@Id
	private Integer id;
	private String nome;
	private String sobrenome;
	
	
	public Pessoa() {
		super();
	}

	public Pessoa(Integer id, String nome, String sobrenome) {
		super();
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
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

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	
	
	
}
