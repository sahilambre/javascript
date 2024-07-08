// for in

const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "deift by apple",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "cpp", "swift"];

for (const key in programming) {
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United States of America");

// ! maps are not iterable
for (const key in map) {
  console.log(key);
}
