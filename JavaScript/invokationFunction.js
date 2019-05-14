function soma(a,b){
	return a+b;
}

console.log(soma(1,2));

var objeto = {
	nome: "talison",
	sobrenome: "fernandes",
	toString: function(){
		return this;
	}
}

console.log(objeto.toString())