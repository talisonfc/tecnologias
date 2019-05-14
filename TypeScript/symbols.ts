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

class lista{
    nomes: string[];

    print(){
        this.nomes.forEach(item => console.log(item));
    }
}

let l = new lista();
l.nomes.push("nome");
l.print();
