package com.escola.model;

import javax.persistence.*;

@Entity
public class Matricula {
	
	@Id
	@GeneratedValue(generator="increment")
	private Integer id;
	@OneToOne
	private Aluno aluno;
	private Turma turma;

}
