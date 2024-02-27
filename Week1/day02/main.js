//function declaration
function greet(firstNmae, lastName) {
    console.log("hello", firstNmae + "  " + lastName)
}
greet("mani", "frae")


//arrrow function and annonamous function
const sayHello1 = function (firstName) {
    console.log("Hello" + firstName)
}
sayHello("Bill")

//arrow function
const sayHello = () => {
    console.log("Hello Arrow")
}
sayHello()

const sayHello5 = firstName => console.log(`Hello${firstName}`)
sayHello5("maery")


const sayHell = () => "hello======="
console.log(sayHell())

function greet1(firstNmae, lastName) {
    return "hello", firstNmae + "  " + lastName
}
greet1("mani", "frae")


//return object
const sayHello9 = () => ({
    msg: "Hello"
})

function greet(name) {
    return "Hello," + name + "!";;
}
const greet1 = (name) =>
    "Hello, " + name + "!";
//const greet1=(name)=>`Hello ${name}!`
//console.log(greet1("maria"))
//or
const greetings = greet1("maria")
console.log(greetings)

const add = (a, b) =>
    a + b;

const result = add(5, 6)
console.log(result)

const square = x => x * x;
const ansSq = square(3)
console.log(ansSq)

//create Arrow function to display user profile information
// const userProfile = {
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     age: 28,
//     country: "USA"
// };
// const displayInfo = (userProfile) => {
//     return `name: ${userProfile.name}
//     email:${userProfile.email} 
//     age:${userProfile.age}
//     country:${userProfile.country}`;
// }

// console.log(displayInfo(userProfile))
const userProfile = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
    country: "USA"
};
//* create Arrow function that accepts parameters to display user profile information 

// const { name, email, age, country } = userProfile

const displayUserInfo = ({
    name,
    email,
    age,
    country
}) => `User Profile Info: ${name} ${email} ${age} ${country}`;

// displayUserInfo(userProfile);
console.log(displayUserInfo(userProfile))