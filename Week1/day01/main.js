//There are tow ways to get the values from objects 
//1. dot notation
const person = {
    name: 'John',
    age: 25,
    occupation: 'Engineer'
};

// Using dot notation to access property values
const personName = person.name;
const personAge = person.age;
const personOccupation = person.occupation;

console.log(personName); // Output: John
console.log(personAge); // Output: 25
console.log(personOccupation); // Output: Engineer
//2. square bracket notation
const person = {
    name: 'John',
    age: 25,
    occupation: 'Engineer'
};

// Using square bracket notation to access property values
const personName = person['name'];
const personAge = person['age'];
const personOccupation = person['occupation'];



const address = {
    street: "123 Main St",
    city: "Chantilly",
    state: "VA",
    zipCode: "20151"
};
address.street = "12960 Freestoe"
address.city = "Woodbridge"
address.state = "VA"
console.log(address)
address['street'] = "Groovers street"
address['city'] = "Manassas"
console.log("square bracket method   ", address)