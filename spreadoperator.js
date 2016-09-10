console.log([1,2,3];
//returns [1,2,3]

console.log(...[1,2,3]);
//returns 1,2,3


let first = [1,2,3];
let second = [4,5,6];

first.push(second);
console.log(first);
//returns [1,2,3,[4,5,6]]

let first= [1,2,3]
let second= [4,5,6]

first.push(...second);
console.log(first);
//returns [1,2,3,4,5,6]


let first = [1,2,3];
let second = [4,5,6];

function addThreeThings(a,b,c){
	let result = a + b + c;
	console.log(result);
}
addThreeThings(...first);
addThreeThings(...second);
//returns 6
//returns 15
