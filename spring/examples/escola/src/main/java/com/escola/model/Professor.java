package com.escola.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name="Professor")
public class Professor extends Pessoa{
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Competencia> competencias = new ArrayList<Competencia>();

	public List<Competencia> getCompetencias() {
		return competencias;
	}

	public void setCompetencias(List<Competencia> competencias) {
		this.competencias = competencias;
	}
	
	
	
}
