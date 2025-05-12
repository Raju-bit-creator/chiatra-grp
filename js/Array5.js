let num = 5;
let fib = [0, 1];
for (let i = 2; i < num; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib);

let users = [
  {
    name: "John",
    product: [
      { name: "macbook", price: 1000 },
      { name: "iphone", price: 500 },
      { name: "ipad", price: 800 },
    ],
  },
  {
    name: "Ramesh",
    product: [
      { name: "macbook", price: 100 },
      { name: "iphone", price: 500 },
      { name: "ipad", price: 80 },
    ],
  },
  {
    name: "Sujan",
    product: [
      { name: "macbook", price: 1000 },
      { name: "iphone", price: 50 },
      { name: "ipad", price: 800 },
    ],
  },
];

users.map((user) => {
  user.product.map((prod) => {
    if (prod.name == "iphone") {
      console.log(`${user.name} bought ${prod.name} for Rs. ${prod.price}`);
    }
  });
});

const User1 = [
  {
    name: "Ramesh",
    age: 25,
    address: "kathmandu",
    email: "ramesh@gmail.com",
    password: "1234",
  },
  "Dinesh",
  "ram",
  "shyam",
  "krishna",
  "suresh",
  "ramesh",
];
const resgisterUser = (name) => {
  const user = User1.find((u) => {
    return u.name === name;
  });
  if (user) {
    console.log(`${user.name} is already registered`);
  } else {
    console.log(`${name} is not registered`);
  }
};
resgisterUser("Ramesh");

let accoutNumber = "123456789123565678";

// how to mask accoutNumber
function maskedAccNumber(accoutNumber) {
  let lastFour = accoutNumber.slice(-4);
  let maskedPart = "*".repeat(accoutNumber.length - 4);
  return maskedPart + lastFour;
}
let final = maskedAccNumber(accoutNumber);
console.log(final);

let phonNumber = 9800073456;
// how to mask phonNumber
function maskedPhoneNumber(phonNumber) {
  let lastFour = phonNumber.toString().slice(-4);
  let maskedPart = "*".repeat(phonNumber.toString().length - 4);
  return maskedPart + lastFour;
}

let finalPhon = maskedPhoneNumber(phonNumber);
console.log(finalPhon);
