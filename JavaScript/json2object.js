var text = '{"empregados": ['+
	'{"nome":"Talison", "sobrenome": "costa"},' +
	'{"nome":"Talismar", "sobrenome": "fernandes"}' +
	']}';

var obj = JSON.parse(text);
console.log(obj.empregados)
var list = obj.empregados;

for(var i=0; i<list.length; i++){
	console.log(list[i].nome + " " + list[i].sobrenome)
}
