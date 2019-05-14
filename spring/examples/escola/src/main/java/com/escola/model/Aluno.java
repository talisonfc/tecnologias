package com.escola.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

@Entity(name="Aluno")
public class Aluno extends Pessoa{
	
	private Historico historico;
	private List<Matricula> matriculas;

}
