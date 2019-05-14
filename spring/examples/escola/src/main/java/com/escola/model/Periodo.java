package com.escola.model;

import java.sql.Date;

import javax.persistence.Embeddable;

@Embeddable
public class Periodo {

	private Date inicio;
	private Date fim;
	
	public Periodo() {
		
	}

	public Date getInicio() {
		return inicio;
	}

	public void setInicio(Date inicio) {
		this.inicio = inicio;
	}

	public Date getFim() {
		return fim;
	}

	public void setFim(Date fim) {
		this.fim = fim;
	}
	
	
	
}
