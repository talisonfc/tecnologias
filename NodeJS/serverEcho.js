const http = require('http');

function io(request, response){
	console.log(request);
	if(request.method === 'GET' && request.url === '/echo' ){
		let body = [];
		
		request.on('data', function readingData(chunck){
			body.push(chunck);
			console.log(chunck)
		})

		request.on('end', function finishRead(){
			body = Buffer.concat(body).toString();
			response.end(body);
		})
	}
	else{
		response.statusCode = 404;
		response.end();
	}
}

const server = http.createServer(io);
server.listen(3000)