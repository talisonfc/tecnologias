package com.escola.model;

import javax.persistence.Embeddable;

@Embeddable
public class Hora {
	
	private Integer hora;
	private Integer minuto;
	private Integer segundo;
	
	public Hora() {
		super();
	}
	
	public Hora(Integer h, Integer m, Integer s) {
		this.setHoraCompleta(h, m, s);
	}
			
	public String getHora(){
		String temp = "";
		
		if(hora<10) temp+="0"+hora;
		else temp+=""+hora;
		temp+=":";
		if(minuto<10) temp+="0"+minuto;
		else temp+=""+minuto;
		temp+=":";
		if(segundo<10) temp+="0"+segundo;
		else temp+=""+segundo;
		
		
		return temp;
	}
	
	public void setHoraCompleta(Integer h, Integer m, Integer s){
		hora = h;
		minuto = m;
		segundo = s;
	}

	public Integer getMinuto() {
		return minuto;
	}

	public void setMinuto(Integer minuto) {
		this.minuto = minuto;
	}

	public Integer getSegundo() {
		return segundo;
	}

	public void setSegundo(Integer segundo) {
		this.segundo = segundo;
	}

	public void setHora(Integer hora) {
		this.hora = hora;
	}

	
}
