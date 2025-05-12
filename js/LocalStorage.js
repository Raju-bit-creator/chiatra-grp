localStorage.setItem("name", "jhon");
localStorage.setItem("token", "dsfdfdsfdfdsfw221345dfbsdfhhsrghbhgbfs");
const name1 = localStorage.getItem("name");
console.log("this is name form local storage", name1);
const token = localStorage.getItem("token");
console.log("this is token form local storage", token);

let user = {
  name: "jhon",
  token: "dsfdfdsfdfdsfw221345dfbsdfhhsrghbhgb",
  email: "jhon@gmail.com",
  password: "123456",
};

// localStorage.setItem("user-object", user);
localStorage.setItem("user-obj", JSON.stringify(user));
let userObj = localStorage.getItem("user-obj");
console.log("thsi is user from localstorage", userObj);
let userName = userObj.name;
console.log("user from local storage", userName);
let parseUser = JSON.parse(userObj);
let parseName = parseUser.name;
console.log("parse user from local storage", parseName);

// fetchuser function
// const fetchUser = () => {
//   const response = fetch("https://reqres.in/api/users");
// };
fetch("https://jsonplaceholder.typicode.com/todos/6")
  .then((response) => response.json())
  .then((json) => console.log("this is response from real api", json));
