const Operations = require('./operations')
const assert = require('assert')

function exec(f, args) {
    return Array.prototype.slice.call(args).reduce(f)
}

before(() => {
    // console.log('before')
})

after(() => {
    // console.log('after')
})

beforeEach((done) => {
    // console.log('before each test')
    done()
})

afterEach(() => {
    // console.log('after each')
})

describe('Operations', () => {
    let soma_tests = [
        { args: [2, 4], expected: 6 },
        { args: [2, 5], expected: 7 },
        { args: [2, 6], expected: 8 },
        { args: [2, 7], expected: 9 }
    ]

    soma_tests.forEach(test => {
        it(`Soma ${test.args[0]} + ${test.args[1]} = ${test.expected}`, ()=>{
            let result = exec(Operations.soma, test.args)
            assert.equal(result, test.expected)
        })

    })

    let divisao_tests = [
        { args: [4, 2], expected: 2 },
        { args: [6, 3], expected: 2 },
        { args: [8, 4], expected: 3 },
        { args: [20, 5], expected: 4 }
    ]

    divisao_tests.forEach(test=>{
        it(`Divide ${test.args[0]} / ${test.args[1]} = ${test.expected}`, (done)=>{
            let result = exec(Operations.divide, test.args)
            assert.equal(result, test.expected, (msg)=>{
                console.log(msg)
            })
            done()
        })
    })

    describe('Simples', () => {
        let tests = [
            { args: [2, 4], expected: 6 },
            { args: [2, 5], expected: 7 },
            { args: [2, 6], expected: 8 },
            { args: [2, 7], expected: 9 }
        ]
        it('Soma', () => {
            tests.forEach(test => {
                let result = exec(Operations.soma, test.args)
                assert.equal(result, test.expected)
            })
        })

        /**
         * We can use the callback done do controll async calls
         */
        it('Divisao', (done) => {
            let tests = [
                { args: [4, 2], expected: 2 },
                { args: [6, 3], expected: 2 },
                { args: [8, 4], expected: 2 },
                { args: [20, 5], expected: 4 }
            ]
            tests.forEach(test => {
                let result = exec(Operations.divide, test.args)
                assert.equal(result, test.expected)
            })
            done()
        })
    })

    describe('complexy', () => {
        it('Multiply 5 * 4', () => {
            assert.equal(Operations.multiply(5, 4), 20)
        })
    })

})