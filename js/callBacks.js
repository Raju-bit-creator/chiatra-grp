// what is calllbacks function?
// to pass function as a parameter to another function

function fetchData(c) {
  console.log("fetching data...");

  setTimeout(() => {
    c("api successfully fetched");
  }, 1000);
}

fetchData((d) => {
  console.log(d);
});

const mutateArray = (arr, xyz) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = xyz(arr[i]);
  }
};

let array = [1, 2, 3, 4, 5];
mutateArray(array, (x) => {
  return x * 3;
});

console.log("this is mutateArray", array);

// promise (resolve , reject , pending)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("internal server error");
    // resolve({
    //   data: "data from promise",
    // });
    resolve({
      email: "ramesh@gmail.com",
      password: "12345678",
    });
  }, 5000);
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
