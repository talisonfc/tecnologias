package com.escola.model;

import javax.persistence.*;

@Entity(name="Competencia")
public class Competencia {
	
	@Id
	@GeneratedValue(generator="increment")
	private Integer id;
	private String nome;
	private String descricao;

}
