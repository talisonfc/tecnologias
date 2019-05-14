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
function extendss(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        //...
    };
    return ConsoleLogger;
}());
var jim = extendss(new Person("Jim"), new ConsoleLogger());
var v = jim.name;
jim.log();
var vv = [21, 3, 4, 556, 6];
console.log("++++++++++++++++++++++++++++++++++++");
for (var valor in vv) {
    console.log(valor);
}
