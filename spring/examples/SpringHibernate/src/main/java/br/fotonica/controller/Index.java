package br.fotonica.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import model.Inscricao;
import model.MenuItem;
import model.Pessoa;
import repository.PessoaRepository;

@Controller
public class Index {
	
	PessoaRepository repository = new PessoaRepository();
	
	@GetMapping("/")
	public ModelAndView index() {
		ModelAndView model = new ModelAndView("index");
		Inscricao i = new Inscricao();
		i.setEmail("talison@gmail.com");
		model.addObject("nome","antonio carlos da silva");
		model.addObject(i);
		model.addObject("pessoas", repository.findAll());
		
		MenuItem menuItem = this.createMenu();
		model.addObject("menu", menuItem);
		
		return model;
	}
	
	@GetMapping("/menu")
	public ModelAndView menu() {
		ModelAndView model = new ModelAndView("menu");
		return model;
	}
	
	@GetMapping("/login")
	public ModelAndView login() {
		ModelAndView model = new ModelAndView("login");
		return model;
	}
	
	public MenuItem createMenu() {
		MenuItem menuItem = new MenuItem("Menu 1");
		
		List<MenuItem> submenu = new ArrayList<MenuItem>();
		submenu.add(new MenuItem("Submenu 1"));
		submenu.add(new MenuItem("Submenu 2"));
		
		menuItem.setSubmenu(submenu);
		
		return menuItem;
		
	}
	
}
