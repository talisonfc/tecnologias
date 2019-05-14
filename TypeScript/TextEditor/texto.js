var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    /**
    Metodo para imprimir valor
    */
    Pessoa.prototype.print = function () {
        console.log(this.nome);
    };
    return Pessoa;
}());
var p = new Pessoa("Talison");
p.print();
