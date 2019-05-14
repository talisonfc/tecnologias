enum Direction{
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

/** Na definição de uma enumeracao, os valores dos campos
 * no enum são incrementados a partir do primeiro
 */

 /**Se queremos forçar que uma enumareção não tenha
  * membros calculaveis, usando o operador const para
  criar uma constante enu
  */

  const enum Directions{
      Up,
      Down,
      Left,
      Right
  }

  /*
  Para descrever a forma de enum já existente, usamos o declare
  */

  declare enum Enum{
      A = 1,
      B,
      C = 2
  }

  /*
  Os membros que não foi inicializado num enum, são considerados
  constante, para alterados redefine-se a enum usano declare
  */