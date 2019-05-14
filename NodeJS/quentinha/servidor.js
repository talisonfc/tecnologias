const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response)=>{
    const {headers, method, url} = request;
    let body = [];
    
    request.on('error',(err)=>{
        console.log(err);
    }).on('data', (chunk)=>{
        body.push(chunk);
    }).on('end',()=>{
        body = Buffer.concat(body).toString();
        
        console.log(request)
        response.on('error',(err)=>{
            console.error(err);
        })
        //console.log(body)

        response.statusCode = 200;
        response.setHeader('Content-Type','application/json');

        const responseBody = {headers, method, url};

        response.write(JSON.stringify(responseB));
        response.end();
    })
}).listen(3000)