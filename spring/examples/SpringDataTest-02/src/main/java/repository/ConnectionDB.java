package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class ConnectionDB {

	DriverManagerDataSource driverManagerDataSource;
	
	public ConnectionDB() {
		driverManagerDataSource = new DriverManagerDataSource();
		driverManagerDataSource.setUrl("jdbc:postgresql://localhost:5432/test");
		driverManagerDataSource.setDriverClassName("org.postgresql.Driver");
		driverManagerDataSource.setUsername("postgres");
		driverManagerDataSource.setPassword("postgres");
	}
	
	public Connection getConnection() throws SQLException{
		return this.driverManagerDataSource.getConnection();
	}
	
	public DataSource getDataSource() {
		return this.driverManagerDataSource;
	}
}
