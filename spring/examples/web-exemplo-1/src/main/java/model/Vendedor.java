package model;

public class Vendedor extends Pessoa{

	public Vendedor() {
		super();
		this.setTipo(PessoaTipo.VENDEDOR);

		System.err.println("VENDEDOR");
	}
}
