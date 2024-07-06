const user = {
  username: "sahil",
  price: 987,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

console.log(this);

// basic arrow functions //! when you use the curly braces {} you have to use the return keyword
const addTwo = (num1, num2) => {
  return num1 + num2;
};

// implcit return
// const addTwo = (num1, num2) => num1 + num2;
