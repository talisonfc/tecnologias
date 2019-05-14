package model;

public class Dono extends Pessoa{
	
	public Dono() {
		super();
		this.setTipo(PessoaTipo.DONO);
		System.err.println("DONO");
	}

}
