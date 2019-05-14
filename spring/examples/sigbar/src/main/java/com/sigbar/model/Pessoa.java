package com.sigbar.model;

import java.sql.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class Pessoa {
	
	private Integer id;
	private String nome;
	private String cpf;
	private String rg;
	private Date nascimento;
	private PessoaTipo pessoaTipo;
	
	public Pessoa() {
		
	}
	
	
	
}
