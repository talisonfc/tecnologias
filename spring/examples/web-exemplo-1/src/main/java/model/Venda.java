package model;

import java.util.ArrayList;

public class Venda {
	
	private Integer id;
	private Cliente cliente;
	private ArrayList<ItemVenda> itens;
	
	public Venda() {
		super();
		this.itens = new ArrayList<ItemVenda>();
	}
	
	public void addItem(ItemVenda item) {
		this.itens.add(item);
	}
	
	public void removeItem(ItemVenda item) {
		this.itens.remove(item);
	}
	
	public void editItem(ItemVenda itemUpdated, Integer index) {
		this.itens.set(index, itemUpdated);
	}
	
	public Float custo() {
		Float total = 0.0f;
		for(ItemVenda item: this.itens) {
			total += item.custo();
		}
		return total;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	
}
