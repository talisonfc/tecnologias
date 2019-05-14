/**
 * Iteratores é definido em TS para percorrer uma coleção de elementos.
 * 
 * Somente os objetos que tem a propriedade Symbol.interator suporta os
 * iteratores.
 * 
 * Existem dois iteratores basicos: for..of e for..in
 * 
 * for..of percorre a coleção respondendo com o valor dos campos
 * for..in percorre a coleção respondendo com o indice dos campos,
 * este indices pode ser number ou values de maps.
 * 
 * Os tipos que possuem a propriedade Symbol.iterator built-in são Array,
 * Map, Set, String, Int32Array e Uint32Array
 */