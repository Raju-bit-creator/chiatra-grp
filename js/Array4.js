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
    name: "Germany",
    countryCode: "DE",
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
    (c) => c.name.toLocaleLowerCase() === countryName
  );
  if (country) {
    return country.countryCode;
  } else {
    return "Country Not Found";
  }
};
let shortCode = getCountryCode("nepal");
console.log(shortCode);
