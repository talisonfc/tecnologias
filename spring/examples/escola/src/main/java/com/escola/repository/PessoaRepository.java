package com.escola.repository;

import org.hibernate.SessionFactory;

import com.escola.model.Pessoa;

public class PessoaRepository extends Repository<Pessoa>{

	public PessoaRepository(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
}
