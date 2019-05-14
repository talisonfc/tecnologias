package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import model.Pessoa;
import repository.PessoaRepository;

@Controller
@RequestMapping("/")
public class PessoaController {

	@Autowired
	private PessoaRepository repository;
	
	@GetMapping
	public ModelAndView index() {
		Pessoa p = new Pessoa(1, "talison", "fernandes");
		this.repository.save(p);
		ModelAndView view = new ModelAndView("/index");
		view.addObject("pessoas", this.repository.findAll());
		return new ModelAndView("/index");
	}
	
}
