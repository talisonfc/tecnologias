package model;

import java.util.List;

public class MenuItem {
	
	private String nome;
	private boolean ativo = true;
	private List<MenuItem> submenu;
	private String urlcontroller;
	
	public MenuItem() {
		super();
	}
	
	public MenuItem(String nome) {
		super();
		this.nome = nome;
	}
	
	public MenuItem(String nome, String urlController) {
		super();
		this.nome = nome;
		this.urlcontroller = urlController;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<MenuItem> getSubmenu() {
		return submenu;
	}

	public void setSubmenu(List<MenuItem> submenu) {
		this.submenu = submenu;
	}

	public String getUrlcontroller() {
		return urlcontroller;
	}

	public void setUrlcontroller(String urlcontroller) {
		this.urlcontroller = urlcontroller;
	}

	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}
	
	
	
	
}
