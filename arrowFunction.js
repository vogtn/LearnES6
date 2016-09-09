//standard function
var createGreeting = function(message, name){
	return message + name;
}

//arrow function
var arrowGreeting = (message, name) => {
	return message + name;
}

//shorter version
var arrow Greeting = (message, name) => message + name;

//one variable
var arrowGreeting = message => "hello";

//X^2 normal
var squared = function(x){
	return x*x;
}

//X^2 arrow
var squared = x => x*x;
