package model;

import java.sql.Date;

public class Pessoa {
	
	private Integer id;
	private String name;
	private String cpf;
	private Date nascimento;
	private String telefone;
	private PessoaTipo tipo;

	public Pessoa() {
		super();
		System.err.println("PESSOA");
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Date getNascimento() {
		return nascimento;
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public PessoaTipo getTipo() {
		return tipo;
	}

	public void setTipo(PessoaTipo tipo) {
		this.tipo = tipo;
	}

	@Override
	public String toString() {
		return "Pessoa [id=" + id + ", name=" + name + ", cpf=" + cpf + ", nascimento=" + nascimento + ", telefone="
				+ telefone + ", tipo=" + tipo + "]";
	}
	
	
	
}
