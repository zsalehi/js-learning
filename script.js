
// declare name and admin
let admin, name;

name = "John";

// assign admin to be name
admin = name;

//alert message
//alert(admin);

//declare name of planet
let planetName = "Earth";

//declare current visitor;
let currentVisitor = "John";


// exercise 1 + 2
console.log(23 + 97);
console.log(30 + 237);
console.log(233 + 948);
console.log(123 + 197);
console.log(16 + 653);
console.log(454 + 784);
console.log(1 + 1);

// exercise 3
console.log((4 + 6 + 9) / 77);

// exercise 4
let a = 10;

console.log(a);
console.log(9 * a);

let b = 7 * a;
console.log(b);

//exercise 5 
const max = 57;

let actual = max - 13;
let percentage = actual/max;


//js fundamentals part 3 - exercise 1
function add7(num) {
    return num + 7;
}

console.log(add7(9));

//js fundamentals part 3 - exercise 2
function multiply (num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 5));

//js fundamentals part 3 - exercise 3

function capitalize(str) {
   return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("zAIGHAM"));

//js fundamentals part 3 - exercise 4

function lastLetter(str) {
    length = str.length;
    return str.slice(length-1);
}

console.log(lastLetter("zaigham"));