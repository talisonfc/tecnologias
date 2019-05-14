package model;

public class Endereco {
	
	private Integer id;
	private String pais;
	private String estado;
	private String cidade;
	private String bairro;
	private String rua;
	private Integer numero;
	private String complemento;
	private String cep;
	
	public Endereco(
			Integer id,
			String pais,
			String estado,
			String cidade,
			String bairro,
			String rua,
			Integer numero,
			String complemento,
			String cep) {
		System.err.println("testing initialization ENDERECO");
		this.id = id;
		this.pais = pais;
		this.estado = estado;
		this.cidade = cidade;
		this.bairro = bairro;
		this.rua = rua;
		this.numero = numero;
		this.complemento = complemento;
		this.cep = cep;
	}

	@Override
	public String toString() {
		return "Endereco: [id=" + id + ", pais=" + pais + ", estado=" + estado + ", cidade=" + cidade + ", bairro="
				+ bairro + ", rua=" + rua + ", numero=" + numero + ", complemento=" + complemento + ", cep=" + cep
				+ "]";
	}
	
	
}
