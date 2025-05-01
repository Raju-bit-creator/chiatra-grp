// Conditionals
// IF ELSE
// Ternary operator  ? :
// Operands and operators
// assignment
// arithmetic
// comparison < <= > >=  , == ,===
// logical  &&  || !

// let isRain = false;
// let scorchingSun = false;
// let wilNotRain = true;
let today = "friday";

// if (isRain) {
//   console.log("take umbrella");
// } else {
//   console.log("no need to take umbrella");
// }

//teranary operator
// let decision = today == "monday" ? "happy weekend" : "sad weekend";
// console.log(decision);

if (today == "sunday") {
  console.log("today is sunday");
} else if (today == "monday") {
  console.log("today is monday");
} else if (today == "tuesday") {
  console.log("today is tuesday");
} else if (today == "wednesday") {
  console.log("today is wednesday");
} else if (today == "thursday") {
  console.log("today is thursday");
} else {
  console.log("today is friday");
}
let number = 4.5;
let num = Math.floor(number);
let num1 = Math.ceil(number);
console.log(num);
console.log(num1);

// if (isRain) {
//   console.log("take umbrella");
// } else if (scorchingSun) {
//   console.log("take umbrella");
// } else {
//   console.log("dont take umbrella");
// }

// assignment operator = > <
//aritematic operator +_% / *
//comparision  operator ==> >=== === ==
//logical operator ! && ||
let x = 2;
const y = 3;

// console.log(x);
// // Expected output: 2

// console.log((x = y + 1)); // 3 + 1
// // Expected output: 4

// console.log((x = x * y)); // 4 * 3
// // Expected output: 12

if (x > y) {
  console.log("x is greater");
} else {
  console.log("y is greater");
}

let isRain = false;
let scorchingSun = false;
let wilNotRain = true;

if (!isRain && !scorchingSun) {
  console.log("take umbrella");
} else {
  console.log("no need to take umbrella");
}
