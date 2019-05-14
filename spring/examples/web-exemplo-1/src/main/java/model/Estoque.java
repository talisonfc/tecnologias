package model;

import java.util.ArrayList;

public class Estoque {
	
	private Integer id;
	private ArrayList<Produto> produtos;
	
	public Estoque() {
		super();
		this.produtos = new ArrayList<Produto>();
	}

	public void addProduto(Produto p) {
		this.produtos.add(p);
	}
	
	public void removeProduto(Produto p) {
		this.produtos.remove(p);
	}
}
