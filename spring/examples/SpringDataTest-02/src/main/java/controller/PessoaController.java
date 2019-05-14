package controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import model.Pessoa;
import service.PessoaService;

@Controller
public class PessoaController {

	PessoaService service = new PessoaService();

	@GetMapping("/")
	public String index() {
		Pessoa p = new Pessoa();
		p.setId(50);
		p.setNome("talison");
		p.setCpf("232.2323.232-82");
		int resp = add(p);
		System.out.println(resp);
		return "index";
	}
	
	@GetMapping("/list")
	public String list() {
		for(Pessoa p: findAll()) {
			System.out.println(p);
		}
		return "index";
	}

	public int add(Pessoa p) {
		return service.add(p);
	}

	public Pessoa findById(int id) {
		return service.findById(id);
	}

	public List<Pessoa> findAll() {
		return service.findAll();
	}
}
