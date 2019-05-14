package service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.repository.core.CrudMethods;

import model.Pessoa;
import repository.PessoaRepository;

public class PessoaService implements CrudService<Pessoa, Integer>{

	PessoaRepository repository;

	@Override
	public Pessoa save(Pessoa entity) {
		return repository.save(entity);
	}

	@Override
	public void deleteOne(Pessoa entity) {
		repository.delete(entity);
	}

	@Override
	public void deleteById(Integer id) {
		repository.deleteById(id);
	}

	@Override
	public Pessoa updateOne(Pessoa entity) {
		// Repository know id data entity has a id. If entity has a id, so he know that it's just update statement.
		// If there aren't a id preset in entity, the repository know that it's refer for a new row inserted in a table
		return repository.save(entity);
	}

	@Override
	public Pessoa updateById(Integer id, Pessoa entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pessoa findOne(Pessoa entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pessoa findById(Integer id) {
		return null;
	}

	@Override
	public List<Pessoa> findAll() {
		List<Pessoa> list = new ArrayList<Pessoa>();
		repository.findAll().forEach(list::add);
		return list;
	}
	
}
