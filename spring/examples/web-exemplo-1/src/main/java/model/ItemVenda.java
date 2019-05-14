package model;

public class ItemVenda {

	private Integer id;
	private Produto produto;
	private Integer qtn;
	
	public Float custo() {
		return this.produto.getValor()*this.qtn;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public Integer getQtn() {
		return qtn;
	}

	public void setQtn(Integer qtn) {
		this.qtn = qtn;
	}
	
	
	
}
