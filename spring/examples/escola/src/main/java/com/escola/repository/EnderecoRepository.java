package com.escola.repository;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.escola.model.Endereco;

public class EnderecoRepository extends Repository<Endereco>{
	
	public EnderecoRepository(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
}
