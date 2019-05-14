/*
Um módulo interno é mesmo que "namespace".  
*/
namespace Validation{
	export interface StringValidator{
		isAcceptable(s:string): boolean;
	}

	let lettersRegex = /^[A-Za-Z]+$/;
	let numberRegexp = /^[0-9]+$/;

	export class LettersOnlyValidator implements StringValidator {
		isAcceptable(s:string){
			return lettersRegex.test(s);
		}
	}

	export class ZipCodeValidator implements StringValidator{
		isAcceptable(s: string){
			return s.length == 5 && numberRegexp.test(s);
		}
	}
}

// Some samples to try
let strings = ["Hello","98052","101"];

// Validators to use
let validators: {[s:string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letter only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for(let s of strings){
	for(let name in validators){
		let isMatch = validators[name].isAcceptable(s);
		 console.log(s+""+ isMatch ? "matches" : "does not match"+" "+name);
	}
}