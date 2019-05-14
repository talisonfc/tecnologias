/*
A compatibilidade de tipo em TS é baseado na estrutura de subtipos, isto é,
nos tipos do membro
*/
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p;
p = new Person();
/*
Em linguagens tipadas, como C# e Java, a expressão acima produz um erro, porque pessoa
não tem nenhuma relação explicita com a interface Named
*/
var x;
var y = { name: "Alice", location: "Seattle" };
console.log(y.name + " " + y.location);
//console.log(x.name)
x = y;
console.log(x.name);
/**
Comparando 2 funções
*/
var xx = function (a) { return 0; };
var yy = function (b, s) { return 0; };
yy = xx; // Compativel
// xx = yy; Não Compativel
/*
Na comparação de função, os nomes dos argumentos não são considerados para verificar
a compatibilidade, apenas seus tipos.
*/
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
items.forEach(function (item, index, array) { return console.log(item + " " + index); });
items.forEach(function (item) { return console.log(item); });
/*
Devido a compatibilidade de função, não é necessário passar todos os argumentos
*/
var xxx = function () { return ({ name: "Alice" }); };
var yyy = function () { return ({ name: "Alice", location: "Seattle" }); };
xxx = yyy; //OK
// yyy = xxx; //Tipo de returno não compativel.
function invocar(args, callback) {
    args.forEach(function (item) { return console.log(">>> " + item); });
}
;
invocar([1, 2, 3, 4, 5], function (x, y) { return console.log(x + " " + y); });
/**
>>> Podemos fazer sobrecarga de função com TS tais funções serem compativeis
>>> Enuns são compativeis com numbers e number são compativeis com enum
*/
var Status;
(function (Status) {
    Status[Status["Ready"] = 1] = "Ready";
    Status[Status["Waiting"] = 2] = "Waiting";
})(Status || (Status = {}));
;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Creen"] = 2] = "Creen";
})(Color || (Color = {}));
;
var statusx = Status.Ready;
//statusx = Color.Blue; // Como os elementos da enum status não foram inicializados
// tais elementos são const e por isso não podem ser alterados
/**
Sempre que TS verifica a compatibilidade, são comparados os tipos dos elementos
do objeto ou função, o retornos das função base e alvo. Isto é, o compilador verifica
se a estrutura dos objetos são compativeis.
*/ 
