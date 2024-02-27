//extracting values from arrays and objectsit can be used for variable declaration
const animals = ['horse', 'dog', 'fish', 'cat', 'bird']
//const [firstAnimal] = animals; // getting first value from array  print horse
//console.log(firstAnimal) //horse
// const [firstAnimal] = animals[0] // will print h
// console.log(firstAnimal)
const [firstAnimal, secondAnimal, thirdAnimal] = animals;
console.log(thirdAnimal)


//destructuring objects we use { curly brackets}
const person = {
    firstName: 'maria',
    lastName: 'Tahir',
    email: 'abc@gmail.com',
    password: '12334',
    userName: 'TechCircle',
    create_at: 123455

}
// const {
//     firstName,
//     userName
// } = person;
// console.log(firstName)
// console.log(userName)
const {
    firstName: fn,
    userName
} = person //fn is temporary key we can assign to key
console.log(fn)
console.log(person.firstName)
console.log(person)

const fruits = ['Apple', 'Banana', 'Cherry'];
//Get first and second value from the array with destructuring and without destructuring
const [firstValue, secondValue] = fruits
console.log(firstValue)
console.log(secondValue)

// Suppose we have an object with user details
const user = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
};
const {
    name: N,
    age: a
} = user;
console.log(N)
console.log(a)