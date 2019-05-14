package app;

import model.Pessoa;
import view.PessoaView;

public class Application {
	
	public static void main(String[] args) {
		Pessoa p = new Pessoa();
		p.setId(3);
		p.setNome("wellyda");
		p.setCpf("212.334.545-23");
		
		PessoaView view = new PessoaView();
		view.add(p);
		view.list();
	}
	
}
