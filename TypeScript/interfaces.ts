/*
Um dos principios centrais do TS é que a verificação de tipos se
concentra na forma que os valores tem. "duck type" ou "structural subtyping"

- TS checa o tipo a partir da forma do tipo.
*/

function printLabel(labelledObj: {label: string}){
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);

/*
myObj tem mais propriedades que o objeto de entrada da 
função printLabel. No entanto, como TS checa apenas as
pripriedades do objeto da assinatura, o contrato é respeitado
mesmo que o objeto de entrada tenha mais propriedades.
*/

/**
 * A interface criada em TS suporta variaveis
 * A checagem de tipo não obriga que as propriedades
 * de um objeto esteja numa ordenação especifica, apenas
 * que os objetos tenham as propriedades da interface
 */
interface LabelledValue{
    label: string;
}

function printLabel1(labelledObj: LabelledValue){
    console.log(labelledObj.label);
}

let myObj1 = {size: 10, label: "size 10 object"};
printLabel1(myObj1);
console.log(myObj1.size);

/**
 * Optional properties
 * -----------------------------------------------------------
 * Nem todas as propriedades da interface podem ser requerida.
 * Algumas existem ate certa condições ou por não existir.
 * 
 * Para expressar uma propriedade obicional, escrevemos a propriedade
 * seguida de um interrogação.
 * Exemplo: propertie?:value
 */

 interface SquareConfig{
     color?: string;
     width?: number;
 }

 function createSquare(config: SquareConfig): {color: string, area: number}{
     let newSquare = {color: "white", area: 100};
     if(config.color){
         newSquare.color = config.color;
     }
     if(config.width){
         newSquare.area = config.width * config.width;
     }
     return newSquare;
 }

 let mySquare = createSquare({color: "black", width:2});
 console.log(mySquare.color + " - " +mySquare.area);

 /**
  * Pripriedades somente leitura
  -----------------------------------------------------
  Algumas pripriedades podem somente ser modificadas quando
  o objeto é criado. Podemos especificar colocando readonly
  antes da propriedades.
  */

  interface Point{
      readonly x: number;
      readonly y: number;
  }

  let p1: Point = {x: 10, y: 20};

  /**
   * TS vem com o tipo ReadonArray<T> que é o mesmo que Array<T>
   * com todos os metodos de alteração de valor removido.
   */

   let a: number[] = [1,2,3,4];
   let ro: ReadonlyArray<number> = a;
   /*
   >> As instruções declaradas abaixo contem erros porque o objeto
   ro é uma colecao ReadonlyArray<T>
   ro[0] = 12;
   ro.push(5);
   ro.length = 100;
   a = ro;
   */

   /**
    * Podemos usar assertion (casting) para converter uma
    coleção somente leitura para array.
    */
   a = ro as number[];
   a.push(10);
   a[0] = 2;

   /** A diferença entre const e readonly é que 'const' é usada
    * para torna o valor de uma variavel inalteravel, enquanto
    readonly torna o valor de uma propridade inalterada. Ou seja,
    readonly só pode ser usada dentro de class.
    */

    // let aa:number = 2;
    const aa: number = 2;
    class teste{
        readonly bb: number = 4;
    }
    console.log(aa);

    /** Checagem de excesso de propriedades
     * options bags -> Bulsa de opcao
     */

     let mySquare2 = createSquare({width: 100, opacity:0.5} as SquareConfig);
    console.log(mySquare.area);

    /** Function Types */

    interface SearchFunc {
        (source: string, substring: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function(source: string, substring: string){
        let result = source.search(substring);
        return result > -1;
    }

    /** para a checagem o nome dos parametros não importam, apenas a posicao e o tipo */

    let mySearch1: SearchFunc;
    mySearch1 = function(source: string, sub: string){
        let result = source.search(""+sub);
        return result > -1;
    }


    /**Tipos indexiaveis */
    interface StringArray{
        // Assinatura de indices
        [index: number] : string;
    }

    let myArray: StringArray;
    myArray = ["Bob","Fred"];
    let myStr: string = myArray[0];
    console.log(myStr)

    /** TIPO CLASSE */

    interface ClockInterface{
        currentTime: Date;
        setTime(d: Date);
    }

    class Clock implements ClockInterface{
        currentTime: Date;
        constructor(h:number, m:number){

        }

        setTime(d: Date){
            this.currentTime = d;
        }
    }

/* A interface define um lado publico de um classe
O lado da implementação é denominado lado privado da classe porque tem propriedades
e comportamentos particulares.
*/



/** Podemos fazer herança de varias interfaces */

interface Shape{
    color: string;
}

interface PenStroke{
    penWidth: number;
}

interface Square extends Shape, PenStroke{
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 20;


class Quadrado implements Square{
    color: string;
    penWidth: number;
    sideLength: number;

    constructor(c:string, p:number, s:number){
        this.color = c;
        this.penWidth = p;
        this.sideLength = s;
    }

    imprimir(): void{
        console.log("COR: "+this.color+" PENWIDTH: "+this.penWidth+" SIDELENGTH: "+this.sideLength );
    }
}

let quadrado = new Quadrado("blue",10,10);
quadrado.imprimir();