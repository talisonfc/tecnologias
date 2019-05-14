// Importar o pacote HTTP
const http = require('http');

// Definição da função de entrada e saída
function io(request, response){
	const {headers, method, url} = request;
	// const userAgent = headers['user-agent'];

	/*
	O objeto request dispoe de uma interface para lermos fluxos de dados.
	Podemos ler dados dentro de um stream escutando os eventos 'data' e 'end'.

	O pedao emitido a cada evento 'data' é um buffer.
	*/
	let body = [];
	
	function reading(chunck){
		body.push(chunck);
	}

	function endRead(){
		body = Buffer.concat(body).toString();
	}

	function readError(err){
		console.error(err);
	}

	request.on('error',readError);
	request.on('data',reading);
	request.on('end',endRead);
	
	// Por padrão, o statusCode de resposta é 200
	// Caso queiramos setar um novo valor, podemos acessar esta propriedade do response
	
	// response.statusCode = 404;
	// response.setHeader('Content-Type','application/json');
	// response.setHeader('X-Powered-By','bacon');

	// Uma alternativa é usar o metodo writeHeader
	response.writeHeader(200, {
		'Content-Type':'application/json',
		'X-Powered-By':'bacon'
	})

	// Escrevendo a resposta
	// response.write('<html>');
	// response.write('<body>');
	// response.write('<h1>Hello, World!</h1>');
	// response.write('</body>');
	// response.write('</html>');
	// response.end();

	// Uma alternativa é usar o end() para enviar respostas
	response.end('<html><body><h1>Helloooo</h1></body></html>')
}

// Obtendo o EventEmitter
const server = http.createServer();
// Configurando o método de resposta
server.on('request', io);
server.listen(3000)