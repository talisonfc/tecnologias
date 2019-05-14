package com.escola.model;

import javax.persistence.*;

@Entity(name="Nota")
public class Nota {
	
	private Avaliacao avaliacao;
	private Aluno aluno;
	private float nota;
}
