/*
Exitem tres maneiras de criar objetos em js:
- Definição literal (Object Literal)
- Com o operador new
- Construtor
*/

// Object Literal
var person1 = {	firstName: "Jhon", 
				lastName: "Doe", 
				eyeColor: "Blue",
				toString: function(){
					console.log("++++++++++++++++++++++++++")
					for(x in this){
						console.log(this[x])
					}
					console.log("++++++++++++++++++++++++++")
				}}

person1.toString();

// Keyeord new
var person2 = new Object();
person2.firstName = "Jhon";
person2.lastName = "Doe";
person2.eyeColor = "Blue";
person2.toString = function(){
	console.log("person2: "+this.firstName)
}

person2.toString();

// Constructor
function person3(firstName, lastName, eyeColor){
	this.firstName = firstName;
	this.lastName = lastName;
	this.eyeColor = eyeColor;
	this.toString = function(){
		console.log("person3: "+this.firstName)
	};
}

var p1 = new person3("Talison","Fernandes", "azul")
var p2 = new person3("Gelrado","Fernandes", "azul")

p1.toString();
p2.toString();

// JavaScript has bult-in constructors for native objects
var x1 = new Object();
var x2 = new String();
var x3 = new Number();
var x4 = new Boolean();
var x5 = new Array();
var x6 = new RegExp();
var x7 = new Function();
var x8 = new Date();

x7.println = function(value){
	console.log(value);
}

x7.println("Hello")