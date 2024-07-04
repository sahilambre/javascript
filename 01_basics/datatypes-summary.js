//* Primitive type (Stack memory)
/*
string 
number 
boolean
null
undefined
symbol
BigInt
*/
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

//* reference type (non-primitive) (heap memory)

/*
Arrays
Objects
functions
*/

const heros = ["spiderman", "flash", "batman"];
let nyObj = {
  name: "sahil",
  age: 22,
};

const myFunction = function () {
  console.log("hello world");
};
console.log(typeof anotherId);

//* Stack memory and heap memory

// primitive (stack memory)
let myYoutubeName = "sahilambredotcom";
anotherName = "sahil01";
console.log(myYoutubeName);
console.log(anotherName);

// Non primitive (heap)
let userOne = {
  email: "sahil@google.com",
  age: 23,
};

let useTwo = userOne;

userTwo.email = "sahil@youtube.com";

console.log(userOne);
console.log(userTwo);
