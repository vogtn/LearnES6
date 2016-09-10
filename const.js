//using VAR
var VALUE = 'hello world';
VALUE = 'foo bar';
console.log('value: ', VALUE);
//returns: foo bar

//using const
const VALUE = 'hello world';
VALUE = 'foo bar';
console.log('value: ', VALUE);
/*
const is READ-ONLY, not a variable but a reference
returns: read-only error
*/

//Object const
const VALUE = {};
VALUE.foo = 'bar';
console.log('value: ', VALUE);
//returns: {foo: 'bar'}

//Good for API-keys or PORT

//Scope
if(true){
	const foo = 'bar';
}
console.log('foo ', foo);
//returns error, const is referenced outside of scope

