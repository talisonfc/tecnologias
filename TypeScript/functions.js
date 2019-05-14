/** Function Named */
function add(x, y) {
    return (x + y);
}
var myadd = function (x, y) {
    return (x + y);
};
/*
Uma maneira de forçar os argumentos de uma função usando a tipagem de
contexto.
*/
var myAdd = function (x, y) { return x + y; };
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.toString = function () {
        return this.nome + " " + this.sobrenome;
    };
    return Pessoa;
}());
var p1 = new Pessoa("Talison", "Fernandes");
console.log(p1.toString());
/** Lista variavel de argumentos */
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(firstName + " " + restOfName.join(" "));
}
;
var emp = buildName("Talison", "Tassio", "Talismar");
/** USO DO this e fucao flecha */
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPucker: function () {
        return function () { return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }; };
    }
};
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
function identity(arg) {
    return arg;
}
function identidade(arg) {
    return arg;
}
var saida = identidade("Talison");
console.log(saida);
