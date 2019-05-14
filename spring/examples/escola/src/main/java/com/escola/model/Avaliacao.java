package com.escola.model;

import javax.persistence.*;

enum AvaliacaoTipo{
	PROVA, EXERCICIO, PESQUISA, APRESENTACAO
}


@Entity(name="Avaliacao")
public class Avaliacao {
	
	@Id
	@GeneratedValue(generator="increment")
	private Integer id;
	private AvaliacaoTipo avaliacaoTipo;
	private String descricao;
	private Materia materia;
	private Periodo periodo;
	private Turma turma;

}
