const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User Power: ${power}`);
}

const balance = 1000;

if (balance > 500) console.log("test"); // implicit scope

if (balance < 500) {
  console.log("balance less than 500");
} else if (balance < 750) {
  console.log("balance less than 750");
} else {
  console.log("balance less than 1200");
}

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard) {
  console.log("valid");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("valid login");
}
