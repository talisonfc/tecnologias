package service;

import java.util.List;

public interface CrudService<S,T> {
	public S save(S entity);
	public void deleteOne(S entity);
	public void deleteById(T id);
	public S updateOne(S entity);
	public S updateById(T id, S entity);
	public S findOne(S entity);
	public S findById(T id);
	public List<S> findAll();
}
