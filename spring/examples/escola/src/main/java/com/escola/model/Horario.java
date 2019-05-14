package com.escola.model;

import javax.persistence.Embeddable;

@Embeddable
public class Horario {
	
	private Integer ano;
	private String diaSemanaNome;
	private Hora inicio;
	private Hora fim;
	
}
