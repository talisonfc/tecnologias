/**
 * Decorators
 *
 * Existe certos cenários que requerem adicional caracteristicas para suportar anotações ou
 * modificação da classe ou do membro da classe.
 *
 * Decorators proveem um caminho para adicionarmos anotações e meta-programação.
 *
 * É um tipo especial de declaração que pode ser anexado a declaração de classe, metodo,
 * acessorio, propriedade ou parametro
 *
 * Usao a forma @expression, onde expression por ser um função que pode ser chamada em
 * tempo de execulção
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
* Dado que um decorator @sealed nos podemos escrever sealed como segue
*/
function sealed(target) {
    //do something with 'target'
}
function f() {
    console.log("f(): evalueted");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.metodo = function () {
        console.log("CLASS C");
    };
    ;
    __decorate([
        f(),
        g()
    ], C.prototype, "metodo");
    return C;
}());
var c = new C();
c.metodo();
