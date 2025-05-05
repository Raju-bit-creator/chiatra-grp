// types of loop use for iteration
// for loop
// while loop
// do while
// for each
// map

// let i = 1;
// let j = 2;
// let k = 3;
// console.log(i);
// console.log(j);
// console.log(k);

for (let i = 20; i >= 10; i--) {
  console.log(`3 X ${i} =`, i * 3); //template literal
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.length);
console.log(num.indexOf(10));

let fruits = ["apple", "banana", "grapes"];
// let addFruit = fruits.push("pinapple");
let removeFruit = fruits.pop("banana");
console.log(fruits);

let oddNumber = [];
let evenNumber = [];

for (let i = 0; i < num.length; i++) {
  const x = num[i];
  if (x % 2 == 0) {
    evenNumber.push(x);
  } else {
    oddNumber.push(x);
  }
}
console.log("this is even number array", evenNumber);
console.log("this is odd number array", oddNumber);

// assingment for array methods
// shift;
// unshift;
// splice;
// slice;
// indexOf;
// findIndex;
// includes;

// separate odd number and evenNumber using foreach
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumber1 = [];
let evenNumber1 = [];
numbers.forEach((num) => {
  if (num % 2 == 0) {
    evenNumber1.push(num);
  } else {
    oddNumber1.push(num);
  }
});
console.log("this is even number array", evenNumber1);
console.log("this is odd number array", oddNumber1);

//separate  odd number and even number using map

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumber2 = [];
let evenNumber2 = [];
numbers1.map((num) => {
  if (num % 2 == 0) {
    evenNumber2.push(num);
  } else {
    oddNumber2.push(num);
  }
});
console.log("this is even2 number array", evenNumber2);
console.log("this is odd2 number array", oddNumber2);

// using map and foreach  . make multiplication tabel of 3 and 4

// find method
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findNum = num2.find((num) => {
  return num < 5;
});
console.log(findNum);
let filterNum = num2.filter((num) => {
  return num > 6;
});
console.log(filterNum);
filterNum.map((n) => {
  console.log("thsi filter number multiplication", n * 2);
});
// how to keep filter number multiplication in a array


