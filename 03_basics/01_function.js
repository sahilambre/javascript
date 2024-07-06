function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("H");
  console.log("I");
  console.log("L");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = addTwoNumbers(3, 4);

// console.log(result);

function loginUserMessage(username = "Guest") {
  if (username === undefined) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("sahil"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(100, 200, 300));

const user = {
  username: "sahil",
  price: 999,
};

function handleObject(anyobject) {
  console.log(
    `The user is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 234,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondArray(getArray) {
  return getArray[1];
}

// console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([200, 400, 100, 600]));
