package model;

import javax.persistence.Entity;

@Entity
public class Inscricao {

	private String email;
	
	public Inscricao() {
		super();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
