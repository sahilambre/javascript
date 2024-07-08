// for each

const coding = ["js", "ruby", "python", "cpp", "swift"];

coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
  {
    languageName: "ruby",
    languageFile: "rb",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
