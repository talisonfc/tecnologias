package view;

import controller.PessoaController;
import model.Pessoa;

public class PessoaView {

	PessoaController controller = new PessoaController();
	
	public void add(Pessoa p) {
		controller.add(p);
	}
	
	public void list() {
		for(Pessoa p: controller.findAll()) {
			System.out.println(p);
		}
	}
	
}
