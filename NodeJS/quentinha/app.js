const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response)=>{
    
    request.on('error',(err)=>{
        console.log(err);
    }).on('data', (chunk)=>{
        body.push(chunk);
    }).on('end',()=>{
        //console.log(request.url)
        console.log(request.url.split('?'))

        var pagina = request.url.split('?')[0]
        if(pagina === "/"){
            fs.readFile('./index.html',(erro, dados)=>{
                if(erro) throw erro;
    
                response.write(String(dados));
                response.end();
            })
        }
        else{
            fs.exists("."+pagina,(exist)=>{ // testa se o arquivo existe
                if(exist){
                    fs.readFile("."+request.url,(erro, dados)=>{
                        if(erro) throw erro;
            
                        response.write(String(dados));
                        response.end();
                    })
                    
                }
                else{
                    fs.readFile('./erro.html',(erro, dados)=>{
                        if(erro) throw erro;
            
                        response.write(String(dados));
                        response.end();
                    })    
                }
            })
        }
    })
}).listen(3000)