/*
A inferencia de tipos é um recurso das linguagens de tipagem fraca

Para tipos basicos como number, string e boolena a inferencia
é diretamente obtida a partir do valor.

Para tipos array, onde pode-se adicionar elementos de tipos
distintos, a inferencia seje o algoritmo de tipo comum.

O algoritmo de tipo mais comum consiste em procurar dentre os
tipos dos elementos de um array, aquele que mais acontece.

Pode acontecer de haver empate entre tipos, quando isso acontece
o compilador cria um tipo com a união de todos os elementos.
*/

window.onmousedown = function(mouseEvent){
    console.log(mouseEvent.button);
}

/*
O tipo também pode ser extraido a partir do contexto. Isto
é chamado de 'tipagem por contexto'. Isso ocorre quando o
tipo de uma expressão é uma localização de um elemento, 
como no exemplo acima.
*/