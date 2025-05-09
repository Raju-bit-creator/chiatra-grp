let num = 5;
let fib = [0, 1];
for (let i = 2; i < num; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib);

localStorage.setItem("name", "jhon");
localStorage.setItem("token", "dsfdfdsfdfdsf");
const name1 = localStorage.getItem("name");
console.log("this is name form local storage", name1);
const token = localStorage.getItem("token");
console.log("this is token form local storage", token);
