
const util = require('util')

const execFile = util.promisify(require('child_process').execFile)

// execFile('node', ['calculo.js'], (error, stdout, stderr)=>{
//     if(error){
//         console.error(stderr)
//     }
//     console.log(stdout)
// })

execFile('node', ['--version']).then(res=>{
    console.log(res)
}).catch(err=>{
    console.error(err)
})

execFile('node', ['calculo.js']).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})