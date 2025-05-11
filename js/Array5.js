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
  // {
  //   name: "Ramesh",
  //   age: 25,
  //   address: "kathmandu",
  //   email: "ramesh@gmail.com",
  //   password: "1234",
  // },
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
resgisterUser("ramesh");
