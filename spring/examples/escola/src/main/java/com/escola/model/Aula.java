package com.escola.model;

import javax.persistence.*;

@Entity(name="Aula")
public class Aula {
	
	@Id
	@GeneratedValue(generator="increment")
	private Integer id;
	@ManyToOne
	private Turma turma;
	@ManyToOne
	private Professor professor;
	@ManyToOne
	private Materia materia;
	private Horario horario;
	
}
