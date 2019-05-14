/*
O editor de texto funciona instanciando uma div. Ele fica hospedado dentro da div
*/
var page = window.document.getElementById("page");
var font;
var font_size;
var padding_left = 20;
var padding_rigth = 20;
var padding_top = 20;
var padding_bottom = 20;
page.style.paddingLeft = padding_left + "px";
page.style.paddingRight = padding_rigth + "px";
page.style.paddingBottom = padding_bottom + "px";
page.style.paddingTop = padding_top + "px";
/*
>> Alterando a fonte do texto
*/
var fontSelector = window.document.getElementById("font");
var listOfFontsNames = ["Arial",
    "Times",
    "Sans Serif",
    "Indie Flower",
    "Pacifico"];
var listOfFontsValues = ["arial",
    "times",
    "sans-serif",
    "'Indie Flower', cursive",
    "'Pacifico', cursive"];
listOfFontsNames.forEach(options);
function options(item, index) {
    var option = window.document.createElement('option');
    option.innerText = item;
    option.innerValue = listOfFontsValues[index];
    fontSelector.appendChild(option);
}
fontSelector.onchange = function (event) {
    font = fontSelector.value;
    //console.log(font);
    page.style.fontFamily = font;
};
/*
Alterando o tamanho da fonte do texto
*/
var fontSize = window.document.getElementById("font-size");
var tamanhos = [12, 14, 16, 18, 20, 22, 24, 26, 30];
tamanhos.forEach(function (item) {
    var option = window.document.createElement('option');
    option.innerText = item;
    option.innerValue = item;
    fontSize.appendChild(option);
});
fontSize.onchange = function () {
    font_size = fontSize.value;
    page.style.fontSize = font_size + "px";
    //page.style = "font-size: "+font_size+"px;";
    //console.log("font-size: "+font_size+"px;");
};
/**
Adicionar nova fonte
*/
var imputUrlFont = document.getElementById("urlFontImput");
var saveNewFont = document.getElementById("saveFontButton");
saveNewFont.onclick = function () {
    console.log(imputUrlFont.value);
};
