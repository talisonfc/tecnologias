import Pessoa from './pessoa'

class A{
    runner(){
        console.log('runner')
    }
}

class Main extends A{
    constructor(){
        super()
    }

    run(){
        this.runner()
        console.log("main class")
    }
}

let main = new Main()
main.run()