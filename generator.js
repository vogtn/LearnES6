function* greet(){
	console.log(`You called 'next()'`);
	yield "hello";
}
let greeter = greet();
console.log(greeter);
//returns : {next: [Function], throw: [Function] }
let next = greeter.next();
console.log(next);
//returns : { value: hello, done: true }
let done = greeter.next();
console.log(next);
/*
returns:
You called 'next()'
{value: 'hello', done: false}
{value: undefined, done: true}
*/

function* greet(){
	console.log(`Generators are "Lazy"`);
	yield "How";
	console.log(`I'm not called until the second next`);
	yield "are";
	console.log(`Call me before "you?"`);
	yield "you?";
	console.log(`Called when "done"`);
}
var greeter = greet();
console.log(greeter.next());
//returns: Generators are lazy
console.log(greeter.next());
console.log(greeter.next());
console.log(greeter.next());
/*
returns:
Generators are lazy
{value: 'How', done: false}
Im not called until the second next..... 
*/
//can also use
for (let word of greeter){
	console.log(word);
}

