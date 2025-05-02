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
