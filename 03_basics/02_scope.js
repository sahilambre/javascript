if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);

function one() {
  const username = "sahil";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

one();

if (true) {
  const username = "sahil";
  if (username === "sahil") {
    const website = "youtube";
    console.log(`${username} ${website}`);
  }
}

// ***************** HOISTING ****************
console.log(addOne(5)); // wiill run fine
function addOne(num) {
  return num + 1;
}

// when a function is declared as a expression logging the function before the function declaration will throw an error

// function declared as an expression
// ! addTwo(2); // will throw an error
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(2));
