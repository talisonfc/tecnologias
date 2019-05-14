package br.fotonica.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import model.Inscricao;

@Controller
public class Subscribe {

	@PostMapping("/subscribe")
	public ModelAndView submit() {
		Inscricao i = new Inscricao();
		i.setEmail("talison@gmail.com");
		ModelAndView model = new ModelAndView("index");
		model.addObject(i);
		model.addObject("nome","Talison");
		return model;
	}
	
}
