/*
Type of variables in typescript
- boolean
- number
- string
- structures
*/

let inDone: boolean = false

let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

let color: string = "blue"
let color: string = 'red'

let fullName: string = 'Bob Bobbington'
let age: number = 37
let sentenca: string = 'Hello, my name is ${fullName}'

let list: number[] = [1,2,3,4,5,6,7]
let list: Array<number> = [1,2,3]


// Tuple
let x: [string, number]
// Inicializando a tupla
x = ['hello', 10]


// ENUM - Podemos inicializar o valor do ENUM

enum Color {Red = 1, Gren, Blue}
let c: Color = Color.Gren;

//any
/*
Podemos precisar de um tipo de variavel que não conhecimentos durante a escrita de 
uma aplicação. Isto é, não temos a certeza se este dado sera um int, string, float, boolean.

Um maneira de fazer com que o compiladore verifique em tempo de compilação qual o tipo
de variavel é usando o tipo generico any
*/

let notSure: any = 4
notSure: any = "maybe a string value"
notSure: any = false

// void
/*
Para expresar que uma variavel não é de nenhum tipo ou que uma função não retorna
nada, usamos o tipo void. Este é o inverso de any
*/

function warnUser(): void {
	alert("This is my wornig message");
}

// Alem de voi, outro tipo de variavel usado para não espressar nada é null and undefined

// For represents value it is never occur, we use the type Never. 


// Type assertions - asserção


/*
A palavra chave --let-- e atualmente o meis novo construtor java script que o TS disponibiliza.

*/