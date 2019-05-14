package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionDB {

	private Connection con = null;
	
	private String host = "localhost";
	private String port = "5432";
	private String db = "test";
	private String user = "postgres";
	private String password = "postgres";
	
	public ConnectionDB() {
		String url = "jdbc:postgresql://"+host+":"+port+"/"+db;
		try {
			Class.forName("org.postgresql.Driver");
			con = DriverManager.getConnection(url, user, password);
		}
		catch (Exception e) {
			System.err.println("Falha ao tentar acessa o banco");
			e.printStackTrace();
		}
	}
	
	public Connection getConnection(){
		return this.con;
	}
	
	public void close() throws SQLException {
		con.close();
	}
}
