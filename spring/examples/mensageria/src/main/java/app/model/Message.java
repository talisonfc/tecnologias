package app.model;

public class Message {
	private String nome;
	
	public Message() {
		super();
	}
	
	public Message(String nome) {
		super();
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return "Message [nome=" + nome + "]";
	}
	
	
}
