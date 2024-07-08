// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
  //   console.log(`each char of greetings: ${greet}`);
}

// maps

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United States of America");

console.log(map);

for (const [key, value] of map) {
  console.log(key, value);
  //   console.log(`${key} :- ${value}`);
}

const myObject = {
  game1: "nfs",
  game2: "spiderman",
};

// !
// for (const [key, value] of myObject) {
//   console.log(key, value);
// }
