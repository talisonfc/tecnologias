package repository;

import org.hibernate.SessionFactory;

public class HibernateDaoImpl {
	
	private SessionFactory sessionFactory;
	
	public int findAll() {
		return 0;
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
}
