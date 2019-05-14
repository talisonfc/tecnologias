class Client{
	nome: string;
	email: string;

	constructor(){};
}

let form = document.forms[0];
let save = document.getElementById('salvar');

save.onclick = function(){
	let soons = form.children;
	for(let i=0; i<2; i++){
		console.log(soons[i].value);			
	}
}

