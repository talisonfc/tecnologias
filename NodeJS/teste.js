const http = require('http');

function io(request, response){
  const { headers, method, url } = request;
  console.log(url)

  response.end();
}

http.createServer(io).listen(3000); // Activates this server, listening on port 8080.