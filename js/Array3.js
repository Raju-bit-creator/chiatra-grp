let cartItems = [
  {
    name: "Ramesh",
    products: [
      { title: "labtop", price: 1000 },
      { title: "mobile", price: 500 },
      { title: "watch", price: 200 },
    ],
  },
  {
    name: "Dinesh",
    products: [
      { title: "phone", price: 3000 },
      { title: "mobile", price: 500 },
      { title: "watch", price: 200 },
    ],
  },
  {
    name: "Hitesh",
    products: [
      { title: "tv", price: 2000 },
      { title: "mobile", price: 500 },
      { title: "watch", price: 200 },
    ],
  },
];

cartItems.map((item) => {
  const total = item.products.reduce((j, i) => j + i.price, 10);
  console.log(item.name, total);
});

const cartItems1 = [
  {
    name: "Jeans",
    price: 2000,
  },
  {
    name: "tshit",
    price: 3000,
  },
  {
    name: "Jacket",
    price: 4000,
  },
  {
    name: "belt",
    price: 5000,
  },
  {
    name: "watch",
    price: 6000,
  },
];

const totla11 = cartItems1.reduce((acc, cur) => acc + cur.price, 0);
console.log("this is total", totla11);
