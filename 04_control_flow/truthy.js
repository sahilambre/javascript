//? falsy values : false, 0, -0, BigInt 0n, NaN, null, undefined, ""

//? truthy values: true, "0", 'false', " ", [], {}, function () {},

//* checking if the object is empty
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// Nullish coalesing operator (??): null undefined

let val1;
// val1 = 10 ?? 5;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// ternary operator
//* condition ? true : false
