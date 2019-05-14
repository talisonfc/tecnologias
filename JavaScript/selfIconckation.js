function factorial(x){
	if(x==0){
		return 1;
	}
	x = x*factorial(x-1);
	return x;
}

(function(){
	console.log("Teste");
})(0);

console.log(factorial(5));