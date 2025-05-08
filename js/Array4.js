let cart = [
  {
    product: "Apple",
    price: 100,
    quantity: 2,
  },
  {
    product: "mango",
    price: 50,
    quantity: 3,
  },
  {
    product: "banana",
    price: 150,
    quantity: 4,
  },
  {
    product: "Pinapple",
    price: 250,
    quantity: 5,
  },
  {
    product: "Pinapple",
    price: 150,
    quantity: 1,
  },
];
const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
console.log("this is sum total", total);

let coures = [
  {
    class: "maths",
    completedStatus: false,
  },
  {
    class: "science",
    completedStatus: true,
  },
  {
    class: "english",
    completedStatus: false,
  },
  {
    class: "history",
    completedStatus: true,
  },
  {
    class: "geography",
    completedStatus: false,
  },
];
const completed = [];
const inComplete = [];
for (let i = 0; i < coures.length; i++) {
  const element = coures[i];
  if (element.completedStatus === true) {
    completed.push(element.class);
  } else {
    inComplete.push(element.class);
  }
}
console.log(completed);
console.log(inComplete);

const countries = [
  {
    name: "India",
    countryCode: "IN",
  },
  {
    name: "USA",
    countryCode: "US",
  },
  {
    name: "United Kingdom",
    countryCode: "UK",
  },
  {
    name: "Australia",
    countryCode: "AU",
  },
  {
    name: "Canada",
    countryCode: "CA",
  },
  {
    name: "Germany ",
    countryCode: "GR",
  },
  {
    name: "Nepal",
    countryCode: "NP",
  },
];

// function addition(x, y) {
//   return x * y;
// }
// let sum = addition(10, 20);
// console.log(sum);

const getCountryCode = (countryName) => {
  let country = countries.find(
    (c) => c.name.toLocaleLowerCase().trim() === countryName.trim()
  );
  if (country) {
    return country.countryCode;
  } else {
    return "Country code Not Found";
  }
};
let shortCode = getCountryCode(" germany ");
console.log(shortCode);

let User = [
  {
    name: "Sanjaya",
    age: 25,
    email: "sanjaya@gmail.com",
    password: "sanjaya123",
  },
  "shyam",
  "santosh",
  "ajaya",
  "bijaya",
  "sita",
  "gita",
  "rita",
];

// if name availabel in array  your are register user oterwise not register user
const isUserRegistered = (username) => {
  let user = User.find((u) => u === username.toLocaleLowerCase());
  if (user) {
    return "User is already registered";
  } else {
    return "User is not registered";
  }
};

const userName = isUserRegistered("sanjaya");
console.log(userName);

let User1 = [
  {
    name: "Sanjaya",
    age: 25,
    email: "sanjaya@gmail.com",
    password: "sanjaya123",
  },
  { name: "shyam", age: 25, email: "shyam@gmail.com", password: "shyam123" },
  "santosh",
  "ajaya",
  "bijaya",
  "sita",
  "gita",
  "rita",
];
// find the email of user sanjaya
const findUserEmail = (username) => {
  let user = User1.find((u) => u.name.toLocaleLowerCase() === username);
  if (user) {
    return user.name;
  } else {
    return "User not found";
  }
};
// find the email of user sanjaya
const sanjaya = findUserEmail("shyam");
console.log(sanjaya);

const product = [
  { title: "labtop", price: 4000, quantity: 10 },
  { title: "mobile", price: 3000, quantity: 20 },
  { title: "watch", price: 2000, quantity: 30 },
  { title: "wallet", price: 1000, quantity: 30 },
];
