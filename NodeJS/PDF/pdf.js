var fs = require("fs");


var content = fs.readFileSync('teste.txt','utf8');

var buffer = new Array();
console.log(content)

/**/
fs.writeFile('teste.pdf','',(err)=>{
    if(err) console.log("erro");
})
/**/
