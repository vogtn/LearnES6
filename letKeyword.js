//Using 'var'
var message = "hi";
{
	var message = "bye";
}
console.log(message);
//returns: "bye"

//function scope
var message = "hi";
function greet(){
	var message = "bye";
}
console.log(message);
//returns: hi


//Using ES6 'let'
let message = "hi";
{
	let message = "bye";
}
//return: "hi"
