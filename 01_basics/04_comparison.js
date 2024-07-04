console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //*false
console.log(null == 0); //*false
console.log(null >= 0); //* true
// ! The reason is that an equality check == and comaprison > < >= <= work differently
//! comparisons convert null to a number, treating it as zero.
//? That's why (3) null >= 0 is true and (1)null > 0 is false.

console.log(undefined == 0); // false in all cases

// === strict check (checks not only value but also the datatype)

console.log(2 === "2");
console.log(2 === 2);
console.log("2" === "two");
