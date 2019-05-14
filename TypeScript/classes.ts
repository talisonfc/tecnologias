class Teste{
    a:string = "Talison";

    toString(): string{
        return 'teste ${a}';
    }

}

let t = new Teste();
console.log(t.toString());

class Pessoa{
    private _nome: string;

    setnome(nome: string){
        this._nome = nome;
    }

    get nome(): string{
        return this._nome;
    }

}

let p = new Pessoa();
p.setnome("talison");

/**------------------------------ */
class Greeter{
    greating: string;
    constructor(messege: string){
        this.greating = messege;
    }

    greet(){
        return "Hello, "+this.greating;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

