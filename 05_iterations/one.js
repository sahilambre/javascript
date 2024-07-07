// for

// for (let i = 0; i < 10; index++) {
//   const element = index;
//   console.log(element);
// }

for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer loop: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop: ${j} and Inner loop ${i}`);
    // console.log(i + "x" + j + "=" + i * j);
  }
}

const myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// break and continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    // console.log(`Detected number 5`);
    break;
  }
  //   console.log(`The value of i is ${i}`);
}

// continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(`Detected number 5`);
    continue;
  }
  console.log(`The value of i is ${i}`);
}
