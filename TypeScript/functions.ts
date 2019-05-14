/** Function Named */
function add(x:number,y:number){
    return (x+y);
}

let myadd = function(x:number, y:number){
    return (x+y);
}

/*
Uma maneira de forçar os argumentos de uma função usando a tipagem de 
contexto.
*/
let myAdd: (x: number, y: number) => number =
function(x: number, y: number): number { return x + y; };

class Pessoa{
    private nome: string;
    private sobrenome: string;
    
    constructor(nome:string, sobrenome:string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    getNome():string{
        return this.nome;
    }

    setNome(nome:string){
        this.nome = nome;
    }

    toString():string{
        return this.nome+" "+this.sobrenome;
    }
}

let p1 = new Pessoa("Talison","Fernandes");
console.log(p1.toString());

/** Lista variavel de argumentos */
function buildName(firstName: string, ...restOfName: string[]){
    console.log(firstName + " " + restOfName.join(" "));
};

let emp = buildName("Talison","Tassio","Talismar");

/** USO DO this e fucao flecha */
let deck = {
    suits: ["hearts","spades","clubs","diamonds"],
    cards: Array(52),
    createCardPucker: function(){
        return ()=>function(){
            let pickedCard = Math.floor(Math.random()*52);
            let pickedSuit = Math.floor(pickedCard/13);

            return {suit: this.suits[pickedSuit],card:pickedCard%13}
        }
    }
}
/*
let cardPicker = deck.createCardPucker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of "+pickedCard.suit);

interface Card{
    suit: string;
    card: number;
}

interface Deck{
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): ()=> Card;
}

let deck1: Deck = {
    suits: ["hearts","spades","clubs","diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck){
        return ()=>{
            let pickedCard = Math.floor(Math.random()*52);
            let pickedSuit = Math.floor(pickedCard/13);

            return {suit: this.suits[pickedSuit], card: pickedCard%13};
        }
    }
}

let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker1();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
*/

function identity(arg: any): any{
    return arg;
}

function identidade<U>(arg: U): U{
    return arg;
}

let saida = identidade<string>("Talison");
console.log(saida);

/**Sempre ao escrever uma função generica, devemos ter o cuidado para
 * utilizar dentro dela propridades e comportamentos genericos. Por exemplo
 * se queremos saber o tamanho da entrada e não informamos que a entrada
 * é um array, o compilador lançará um erro. Para resolver isso, basta
 * usarmos a inicialização de um array na forma T[].
 */

 function loggingIdentity<T>(arg: T[]): T[]{
     console.log(arg.length); // Esta instruçao sempre vai funcionar
     return arg;
 }

 /** TIPOS GENERICOS */

