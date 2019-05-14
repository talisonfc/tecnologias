/*
Um dos principios centrais do TS é que a verificação de tipos se
concentra na forma que os valores tem. "duck type" ou "structural subtyping"

- TS checa o tipo a partir da forma do tipo.
*/
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = { size: 10, label: "size 10 object" };
printLabel1(myObj1);
console.log(myObj1.size);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 2 });
console.log(mySquare.color + " - " + mySquare.area);
var p1 = { x: 10, y: 20 };
/**
 * TS vem com o tipo ReadonArray<T> que é o mesmo que Array<T>
 * com todos os metodos de alteração de valor removido.
 */
var a = [1, 2, 3, 4];
var ro = a;
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
a = ro;
a.push(10);
a[0] = 2;
/** A diferença entre const e readonly é que 'const' é usada
 * para torna o valor de uma variavel inalteravel, enquanto
 readonly torna o valor de uma propridade inalterada. Ou seja,
 readonly só pode ser usada dentro de class.
 */
// let aa:number = 2;
var aa = 2;
var teste = /** @class */ (function () {
    function teste() {
        this.bb = 4;
    }
    return teste;
}());
console.log(aa);
/** Checagem de excesso de propriedades
 * options bags -> Bulsa de opcao
 */
var mySquare2 = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquare.area);
var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
/** para a checagem o nome dos parametros não importam, apenas a posicao e o tipo */
var mySearch1;
mySearch1 = function (source, sub) {
    var result = source.search("" + sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 20;
var Quadrado = /** @class */ (function () {
    function Quadrado(c, p, s) {
        this.color = c;
        this.penWidth = p;
        this.sideLength = s;
    }
    Quadrado.prototype.imprimir = function () {
        console.log("COR: " + this.color + " PENWIDTH: " + this.penWidth + " SIDELENGTH: " + this.sideLength);
    };
    return Quadrado;
}());
var quadrado = new Quadrado("blue", 10, 10);
quadrado.imprimir();
