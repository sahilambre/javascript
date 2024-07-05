// singleton
// Object.create

//object literals

const mysym = Symbol("key1");

const jsUser = {
  name: "sahil",
  "full name": "sahil Ambre",
  [mysym]: "my key 1",
  age: 18,
  location: "nyc",
  email: "sahilambre@google.com",
  isLoggedIn: false,
  lasrLoginDays: ["monday", "saturday"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mysym]);
console.log(typeof jsUser.mysym);

jsUser.email = "sahil@youtube.com";
console.log(jsUser);
Object.freeze(jsUser);
jsUser.name = "sa";
console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user");
};
jsUser.greetingTwo = function () {
  console.log(`hello js user ${this.name}`);
};

console.log(jsUser.greetingTwo());
console.log(jsUser.greeting);
