//Standard string concatenation
var salutation = "Hello";
var greeting = salutation + ", World";

console.log(greeting);
//returns: 'Hello, World'

//Using ES6 (respects white space)
var place = "planet"
var salutation = "Hello";
var greeting = `
	You
		Crazy ${world}
`;
console.log(greeting);
/*
returns:
	You 
		Crazy planet
*/

//Equations
var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x + y}`
console.log(equation);
//returns: 1 + 2 = 3

//function
function tag(strings, ...values){
	if(values[0] < 20) {
		values[1] = "awake";
	}
	return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}
var message = tag`It's ${new Date().getHours()} I'm ${""}`;
console.log(message);
//returns: IT's (time) I'm awake. 
