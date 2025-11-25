let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

console.log(x);

const id = Symbol(123);
const accountId = Symbol(123);

console.log(id === accountId); // false
console.log(typeof id);

const heros = ["Spiderman", "Ironman", "Hulk"];
let myObjj = {
    name: "Thor",
    age: 1500,
    city: "Asgard"  
}

const myFunction = function() {
    console.log("Hello World");
}
console.log(typeof myFunction);

    