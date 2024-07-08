const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => {
  return acc + currval;
}, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 987,
  },
  {
    itemName: "data analysis",
    price: 943,
  },
  {
    itemName: "python",
    price: 299,
  },
];

const cartTotal = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(cartTotal);
