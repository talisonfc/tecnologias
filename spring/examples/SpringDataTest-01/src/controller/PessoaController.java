package controller;

import java.sql.SQLException;
import java.util.List;

import model.Pessoa;
import repository.PessoaRepository;

public class PessoaController {
	
	private PessoaRepository repository = new PessoaRepository();

	public boolean add(Pessoa p) {
		try {
			return repository.add(p);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public List<Pessoa> findAll(){
		try {
			return repository.finAll();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	
}
