package com.escola.controller;

import org.hibernate.SessionFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.escola.model.Pessoa;
import com.escola.repository.PessoaRepository;

@RestController
public class PessoaControler extends Controller<Pessoa>{
	
	public PessoaControler(SessionFactory sessionFactory) {
		super(new PessoaRepository(sessionFactory));
	}
	
	@PostMapping(name="/pessoa")
	void addPessoa(Pessoa pessoa){
		this.addEntity(pessoa);
	}
}
