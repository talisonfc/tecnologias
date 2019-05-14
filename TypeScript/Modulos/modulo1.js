"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.toString = function () {
        return "NOME: " + this.nome;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var tipo;
(function (tipo) {
    tipo[tipo["DISCENTE"] = 1] = "DISCENTE";
    tipo[tipo["DOSCENTE"] = 2] = "DOSCENTE";
})(tipo = exports.tipo || (exports.tipo = {}));
