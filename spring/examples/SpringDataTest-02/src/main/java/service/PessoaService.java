package service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Service;

import model.Pessoa;
import repository.PessoaRepository;

@Service
public class PessoaService {
	
	PessoaRepository repository = new PessoaRepository();
	
	public int add(Pessoa p) {
		try {
			return repository.add(p);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;
	}
	
	public Pessoa findById(int id) {
		try {
			return repository.findById(id);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public List<Pessoa> findAll(){
		try {
			return repository.findAll();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
}
