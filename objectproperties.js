//objects use properties already set
let firstName = "John";
let lastName = "Lindquist";

let person = {firstName, lastName}

console.log(person);

//returns: {firstName: 'John', lastName: 'Lindquist'}



let firstName = "John";
let lastName = "Lindquist";

let person = {firstName, lastName};

console.log(person);

let mascot = "Moose";

let team = {person, mascot};

console.log(team);

//returns: {person: {firstName: 'John', lastName: 'Lindquist'}, mascot: 'Moose'}
