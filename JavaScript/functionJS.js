/*
Em java escript existem sempre um objeto global. Uma pagina HTML é o objeto
global que descreve todas as propriedade e comportamentos da pagina. Este objeto
é o window.

Assim, quando escrevemos uma função em JS dentro de uma pagina HTML, esta função
passa a pertencer ao Object window.

Portando, ao declarar function myFunction(){}, a instrução de invicação pode ser:
- myFunction() or
- window.myFunction()r

A palavra chave this representa o objeto atual. this contem todos os atributos e
comportamentos do objeto global.
*/

function soma(a,b){
	return a+b;
}

var x  = function(a,b){
	return a+b;
}

var y = new Function("a","b","return a+b");

console.log(soma(1,2));
console.log(x(1,2));
console.log(y(1,2));

// Funções podem executar sem serem chamadas
(function(){
	console.log("Esta funcao executar sem ninguem chama-la!!!!")
})();

// Para monitorar os argumentos de uma função, js implementa o Object Arguments

console.log("++++++++++++++++++++++++++++++++")
x = findMax(1,123,500,115,55,88);
y = sumAll(1,123,500,115,55,88);

function findMax(){
	console.log("#Execução da função findMax")
	var i;
	var max = -Infinity;
	console.log("MAX: "+max);
	for(i = 0; i<arguments.length; i++){
		if(arguments[i]>max){
			max = arguments[i];
		}
	}
	return max;
}

function sumAll(){
	var i, sum = 0;
	for(i = 0; i<arguments.length; i++){
		sum += arguments[i];
	}
	return sum;
}

console.log(x)
console.log(y)

console.log("++++++++++++++++++++++++++++++++")

// Passagem de argumento por valor
var x = 1;
console.log(x)

function alter(x){
	x = x + 1; 
	return x;
}

console.log(alter(x))
console.log(x)

// Passagem por referencia
console.log("++++++++++++++++++++++++++++++++")

var x = {valor: 1}
console.log(x.valor)

function alter(x){
	x.valor = x.valor + 1; 
	return x;
}

console.log(alter(x))
console.log(x.valor)