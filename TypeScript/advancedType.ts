/*
Alem da interseção de tipos, podemos fazer unicão de tipos, isto é,
fazer o objeto alvo ter um ou outro tipo
*/

function padLeft(value: string, padding: any){
    if(typeof padding === "number"){
        return "NUMBER";
    }
    if(typeof padding === "string"){
        return "STRING";
    }
    throw new Error("padding não é nem string nem number");
}

let p1 = padLeft("TESTE",1);
console.log(p1);
let p2 = padLeft("TESTE","ok");
console.log(p2);

// let p3 = padLeft("TESTE",true);
// console.log(p3);

/**Outra forma de escrever isto é usando o operador | */
function pdaRigth(value: string, padding: number | string | boolean){

}

let p4 = pdaRigth("TESTE",1);
let p5 = pdaRigth("TESTE","teste");
let p6 = pdaRigth("TESTE",true);

/*
Para resguardar qual o tipo que será retornado por um função, TS implementa
uma técnica denominada Tipo de Guarda, que garante que o objeto de retorno
seja de um tipo especifico
*/

/**
 * Outro tipo de guarda é o operador 'instanceof', onde podemos comparar
 * se uma determinada instancia é de um tipo. Essa comparação deve ser
 * reaizada com o construção da classe.
 */

 /**
  * Podemos alterar o nome de um tipo usando a aliase type. Podemos
  alterar o nome de tipos primitivos, unioes, tuplas e qualquer outro
  tipo definido em TS.
  */

  type Name = string;
  let a:Name = "Talison";

  console.log(a);

  /**
   * Além de referenciar um tipo, podemos referenciar varios tipos
   * utilizando a aliase type junto com union. Essa técnica é conhecida
   * como String Literal Types (String de Tipos Literais)
   * 
   * Além do String Literal Types, TS também suporta Numerical Literal Types.
   * 
   */

   /**
    * O comportamento inverso da união é a discriminação
    */

    interface Square{
        kind:"square";
        size: number;
    }

    interface Rectangle{
        kind: "rectangle";
        width: number;
        height: number;
    }

    interface Circle{
        kind: "circle";
        radius: number;
    }

    type Shape = Square | Rectangle | Circle;

    function area(s: Shape): number{
        switch (s.kind){
            case "square": {
                console.log("QUADRADO");
                return s.size*s.size;
            }
            case "rectangle":{
                console.log("RETANGULO");
                return s.height*s.width;
            } 
            case "circle": return Math.PI*s.radius**2;
        }
    }

    class Quadrado implements Square{
        kind: "square";
        size: number = 2;
        constructor(){};
    }

    let f1 = new Quadrado();
    f1.size = 2;

    let f2: Square = {
        kind: "square",
        size: 2
    }

    let f3: Rectangle = {
        kind: "rectangle",
        width: 2,
        height: 3
    }

    console.log(area(f2));
    console.log(area(f3));