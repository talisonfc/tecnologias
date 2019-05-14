/*
Alem da interseção de tipos, podemos fazer unicão de tipos, isto é,
fazer o objeto alvo ter um ou outro tipo
*/
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return "NUMBER";
    }
    if (typeof padding === "string") {
        return "STRING";
    }
    throw new Error("padding não é nem string nem number");
}
var p1 = padLeft("TESTE", 1);
console.log(p1);
var p2 = padLeft("TESTE", "ok");
console.log(p2);
// let p3 = padLeft("TESTE",true);
// console.log(p3);
/**Outra forma de escrever isto é usando o operador | */
function pdaRigth(value, padding) {
}
var p4 = pdaRigth("TESTE", 1);
var p5 = pdaRigth("TESTE", "teste");
var p6 = pdaRigth("TESTE", true);
var a = "Talison";
console.log(a);
function area(s) {
    switch (s.kind) {
        case "square": {
            console.log("QUADRADO");
            return s.size * s.size;
        }
        case "rectangle": {
            console.log("RETANGULO");
            return s.height * s.width;
        }
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
var Quadrado = /** @class */ (function () {
    function Quadrado() {
        this.size = 2;
    }
    ;
    return Quadrado;
}());
var f1 = new Quadrado();
f1.size = 2;
var f2 = {
    kind: "square",
    size: 2
};
var f3 = {
    kind: "rectangle",
    width: 2,
    height: 3
};
console.log(area(f2));
console.log(area(f3));
