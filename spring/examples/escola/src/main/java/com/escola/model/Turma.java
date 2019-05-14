package com.escola.model;

import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity(name="Turma")
public class Turma {

	@Id
	@GeneratedValue(generator="increment")
	private Integer id;
	private Integer qtnMaxAlunos;
	@ManyToOne
	private Nivel nivel;
	private String detalhe;

	
	public Turma() {
		
	}

}
