/*
Tipos avançados
*/

// INTERSEÇÂO DE TIPOS
// Combinação de multiplos tipos dentro para formar um único tipo com várias
// propriedades e comportamentos

/**
Podemos observar a intersecção de tipos usando mixin ou outros conceitos que não
cabem dentro do modelo classico de orientação a objeto.
*/

function extendss<T,U>(first: T, second: U): T & U {
	let result = <T&U>{};
	for(let id in first){
		(<any>result)[id] = (<any>first)[id];
	}
	for(let id in second){
		if(!result.hasOwnProperty(id)){
			(<any>result)[id] = (<any>second)[id];
		}

	}
	return result;
}

class Person{
	constructor(public name: string){}
}

interface Loggable{
	log(): void;
}

class ConsoleLogger implements Loggable{
	log(){
		//...
	}
}

var jim = extendss(new Person("Jim"), new ConsoleLogger());
var v = jim.name;
jim.log();

let vv = [21,3,4,556,6];
console.log("++++++++++++++++++++++++++++++++++++")
for(let valor in vv){console.log(valor)}