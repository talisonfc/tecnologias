var Teste = /** @class */ (function () {
    function Teste() {
        this.a = "Talison";
    }
    Teste.prototype.toString = function () {
        return 'teste ${a}';
    };
    return Teste;
}());
var t = new Teste();
console.log(t.toString());
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.setnome = function (nome) {
        this._nome = nome;
    };
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
var p = new Pessoa();