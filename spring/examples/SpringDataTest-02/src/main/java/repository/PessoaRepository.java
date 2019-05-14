package repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Component;

import model.Pessoa;

@Component
public class PessoaRepository {
	
	@Autowired
	private DataSource dataSource;
	JdbcTemplate jdbcTemplate = new JdbcTemplate();
	NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	 
	public int add(Pessoa p) throws SQLException {
		String sql = "insert into pessoa values (?,?,?)";
		ConnectionDB db = new ConnectionDB();
		jdbcTemplate.setDataSource(db.getDataSource());
		return jdbcTemplate.update(sql, new Object[] {p.getId(), p.getNome(), p.getCpf()});
	}
	
	public int addPessoa(Pessoa p) {
		String sql = "insert into pessoa values (:id,:nome,:cpf)";
		ConnectionDB db = new ConnectionDB();
		jdbcTemplate.setDataSource(db.getDataSource());
		namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(db.getDataSource());
		
		SqlParameterSource namedParameters = new MapSqlParameterSource("id", p.getId())
				.addValue("nome", p.getNome())
				.addValue("cpf", p.getCpf());
		
		return namedParameterJdbcTemplate.update(sql, namedParameters);
	}
	
	public Pessoa findById(int id) throws SQLException {
		String sql = "select from pessoa where id=?";
		jdbcTemplate.setDataSource(new ConnectionDB().getDataSource());
		return jdbcTemplate.queryForObject(sql, new Object[] {id}, Pessoa.class);
	}
	
	public List<Pessoa> findAll() throws SQLException{
		String sql = "select * from pessoa";
		jdbcTemplate.setDataSource(new ConnectionDB().getDataSource());
		return jdbcTemplate.query(sql, new RowMapper<Pessoa>() {
			@Override
			public Pessoa mapRow(ResultSet rs, int rowNumber) throws SQLException {
				Pessoa p = new Pessoa();
				p.setId(rs.getInt(1));
				p.setNome(rs.getString(2));
				p.setCpf(rs.getString(3));
				return p;
			}
		});
	}
	
}
