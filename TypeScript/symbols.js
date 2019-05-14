/**
 * symbols is a primitive data type, just like number and string
 *
 * symbol values are created by calling the Symbol constructor
 */
//let sym1 = Symbol();
//let sym2 = Symbol('key'); //optional string key
/**
 * Simbolos são imutaveis e unicos
 */
var lista = /** @class */ (function () {
    function lista() {
    }
    lista.prototype.print = function () {
        this.nomes.forEach(function (item) { return console.log(item); });
    };
    return lista;
}());
var l = new lista();
l.nomes.push("nome");
l.print();
