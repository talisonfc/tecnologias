/*
A compatibilidade de tipo em TS é baseado na estrutura de subtipos, isto é, 
nos tipos do membro
*/

interface Named{
	name: string;
}

class Person{
	name: string;
}

let p: Named;

p = new Person();

/*
Em linguagens tipadas, como C# e Java, a expressão acima produz um erro, porque pessoa
não tem nenhuma relação explicita com a interface Named
*/

let x: Named;
let y = {name: "Alice", location: "Seattle"};

console.log(y.name+" "+y.location);
//console.log(x.name)
x = y;
console.log(x.name)

/**
Comparando 2 funções
*/

let xx = (a:number) => 0;
let yy = (b:number, s:string) => 0;
yy = xx; // Compativel
// xx = yy; Não Compativel

/*
Na comparação de função, os nomes dos argumentos não são considerados para verificar
a compatibilidade, apenas seus tipos.
*/

let items = [1,2,3,4,5,6,7,8,9];

items.forEach((item,index,array)=>console.log(item+" "+index))
items.forEach(item => console.log(item));

/*
Devido a compatibilidade de função, não é necessário passar todos os argumentos
*/

let xxx = ()=>({name:"Alice"});
let yyy = ()=>({name:"Alice", location:"Seattle"});

xxx = yyy; //OK
// yyy = xxx; //Tipo de returno não compativel.

function invocar(args: any[], callback: (...args: any[]) => void){
	args.forEach(item=>console.log(">>> "+item));
};

invocar([1,2,3,4,5],(x,y)=>console.log(x+" "+y));

/**
>>> Podemos fazer sobrecarga de função com TS tais funções serem compativeis
>>> Enuns são compativeis com numbers e number são compativeis com enum
*/

enum Status {Ready=1, Waiting};
enum Color {Red, Blue, Creen};

let statusx = Status.Ready;
//statusx = Color.Blue; // Como os elementos da enum status não foram inicializados
// tais elementos são const e por isso não podem ser alterados

/**
Sempre que TS verifica a compatibilidade, são comparados os tipos dos elementos
do objeto ou função, o retornos das função base e alvo. Isto é, o compilador verifica
se a estrutura dos objetos são compativeis.
*/