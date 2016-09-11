//normal function
var obj = {
	color: "blue"
}
console.log(obj.color);
//returns blue

//using destructuring
var {color, position} = {
	color: "blue",
	position: "Forward
}
console.log(color);
console.log(position);
//returns: blue
//Forward

//function
function generateObj(){
	return {
		color:"blue",
		name:"John",
		state: "New York",
		position: "Forward"
	}
}

var {name, state} = generateObj();
console.log(name);
console.log(state);
/*
returns: 
John
New York
*/

//Array
var [first,,,,fifth] = ["red", "yellow", "green", "blue", "orange"];
console.log(first);
console.log(fifth);
//returns: "red" , "orange"

