class Pessoa{
	public nome: string;

	constructor(nome:string){
		this.nome = nome;
	}
	
	/**
	Metodo para imprimir valor
	*/
	print(){
		console.log(this.nome);
	}
}

let p = new Pessoa("Talison");
p.print();