
/*
O editor de texto funciona instanciando uma div. Ele fica hospedado dentro da div
*/

let page = window.document.getElementById("page");
let font: string;
let font_size: number;
let padding_left: number = 20;
let padding_rigth: number = 20;
let padding_top: number = 20;
let padding_bottom: number = 20;

page.style.paddingLeft = padding_left+"px";
page.style.paddingRight = padding_rigth+"px";
page.style.paddingBottom = padding_bottom+"px";
page.style.paddingTop = padding_top+"px";

/*
>> Alterando a fonte do texto
*/
let fontSelector = window.document.getElementById("font");

let listOfFontsNames = ["Arial",
						"Times",
						"Sans Serif",
						"Indie Flower",
						"Pacifico"];

let listOfFontsValues = ["arial",
						 "times",
						 "sans-serif",
						 "'Indie Flower', cursive",
						 "'Pacifico', cursive"];

listOfFontsNames.forEach(options);

function options(item, index){
	let option = window.document.createElement('option');
	option.innerText = item;
	option.innerValue = listOfFontsValues[index];
	fontSelector.appendChild(option);
}

fontSelector.onchange = function(event){
	font = fontSelector.value;
	//console.log(font);
	page.style.fontFamily = font;
}

/*
Alterando o tamanho da fonte do texto
*/

let fontSize = window.document.getElementById("font-size");
let tamanhos = [12,14,16,18,20,22,24,26,30];

tamanhos.forEach(function(item){
	let option = window.document.createElement('option');

	option.innerText = item;
	option.innerValue = item;
	fontSize.appendChild(option);
})

fontSize.onchange = function(){
	font_size = fontSize.value;
	page.style.fontSize = font_size+"px";
	//page.style = "font-size: "+font_size+"px;";
	//console.log("font-size: "+font_size+"px;");
}


/**
Adicionar nova fonte
*/
let imputUrlFont = document.getElementById("urlFontImput");
let saveNewFont = document.getElementById("saveFontButton");

saveNewFont.onclick = function(){
	console.log(imputUrlFont.value);
}

