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

 /**
 * Dado que um decorator @sealed nos podemos escrever sealed como segue
 */
function sealed(target){
    //do something with 'target'
}

function f(){
    console.log("f(): evalueted");
    return function (target,propertyKey: string, descriptor: PropertyDescriptor){
        console.log("f(): called");
    }
}

function g(){
    console.log("g(): evaluated");
    return function(target, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("g(): called");
    }
}

class C{
    @f()
    @g()
    metodo(){
        console.log("CLASS C")
    };
}

let c = new C();
c.metodo();