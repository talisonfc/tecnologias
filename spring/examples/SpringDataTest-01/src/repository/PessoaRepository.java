package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import model.Pessoa;

public class PessoaRepository {
	
	public boolean add(Pessoa p) throws SQLException {
		boolean resp = false;
		Connection con = new ConnectionDB().getConnection();
		String sql = "insert into pessoa values (?,?,?)";
		PreparedStatement pstm = con.prepareStatement(sql);
		pstm.setInt(1, p.getId());
		pstm.setString(2, p.getNome());
		pstm.setString(3, p.getCpf());
		resp = pstm.execute();
		con.close();
		return resp;
	}
	
	public Pessoa findById(int id) throws SQLException {
		String sql = "select from pessoa where id="+id+"";
		Connection con = new ConnectionDB().getConnection();
		Statement stm = con.createStatement();
		ResultSet rs = stm.executeQuery(sql);
		
		Pessoa p = null;
		while(rs.next()) {
			p = new Pessoa();
			p.setId(rs.getInt(0));
			p.setNome(rs.getString(1));
			p.setCpf(rs.getString(2));
		}
		con.close();
		return p;
	}
	
	public List<Pessoa> finAll() throws SQLException{
		String sql = "select * from pessoa";
		Connection con = new ConnectionDB().getConnection();
		Statement stm = con.createStatement();
		ResultSet rs = stm.executeQuery(sql);
		
		List<Pessoa> collection = new ArrayList<Pessoa>();
		while(rs.next()) {
			Pessoa p = new Pessoa();
			p.setId(rs.getInt(1));
			p.setNome(rs.getString(2));
			p.setCpf(rs.getString(3));
			collection.add(p);
		}
		con.close();
		return collection;
	}
	
}
