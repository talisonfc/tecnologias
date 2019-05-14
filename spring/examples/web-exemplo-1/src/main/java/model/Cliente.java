package model;

public class Cliente extends Pessoa{
	
	public Cliente() {
		super();
		this.setTipo(PessoaTipo.CLIENTE);

		System.err.println("CLIENTE");
	}
}
