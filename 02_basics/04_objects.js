const tinderUser = new Object(); //! singleton object
// const tinderUser = {} //! non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@email.com",
  fullName: {
    userfullname: {
      firstname: "sahil",
      lastname: "ambre",
    },
  },
};

console.log(regularUser.fullName?.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { obj1, obj2 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 2,
    email: "d@gmail.com",
  },
  {
    id: 3,
    email: "a@gmail.com",
  },
];

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLoggedI"));

const course = {
  coursename: "js course",
  price: 999,
  courseInstructor: "sahil",
};

const { courseInstructor } = course;

console.log(courseInstructor);

const myArray = [];
console.log();
