// Criando um WebServer

// Importando o package HTTP
const http = require('http');

// Definido as configurações do servidor
const hostname = '127.0.0.1';
const port = 3000;

// Função de entrada e saída do servidor
function io(req,res){
	console.log(req)
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Novo teste Hello World\n');
};

// Função de inicialização do servidor
function begin(){
	console.log('Servidor iniciado em http://${hostname}:${port}/');
}

// O objeto retornado por createServer é um EventEmitter
const server = http.createServer(io);
server.listen(port, hostname, begin);

/*
Quando uma requisição HTTP acerta o servidor, o node chama uma função de manipulacao
de requisicao.
*/