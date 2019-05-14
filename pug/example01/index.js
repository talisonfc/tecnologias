const pug = require('pug')

const compiledFunction = pug.compileFile('template.pug')

console.log(compiledFunction({
    nome: 'Talison',
    sobrenome: 'Fernandes'
}))

console.log(compiledFunction({
    nome: 'wellyda',
    sobrenome: 'soares'
}))