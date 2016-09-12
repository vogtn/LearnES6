var myMap = new Map();

//API
/*
set()
get()
size
clear
has()
*/

map.set('foo', 'bar');
myMap.set('hello', 'world');

console.log(myMap.get('foo'));
//returns: "bar"
console.log(myMap.size);
//return: 2
console.log(myMap.has('qwerty'));
//return: false

/*
Iterators
keys()
entries()
values
*/

for(var key of myMap.keys()){
	console.log(key);
} 
/*
returns:
"foo"
"hello"
*/
for(var [key,value] of myMap.entries()){
console.log(key + ' = ' + value);
}

