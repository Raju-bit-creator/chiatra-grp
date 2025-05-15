// async and await

const asyncFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("this is response from async function", data);
};
asyncFunction();

const asyncFunction1 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const data = await response.json();
    console.log("this is response from async function1", data);
  } catch (error) {
    console.log("this is error from async function1", error);
  }
};
asyncFunction1();

const asyncFunction2 = async (type, message) => {
  console.log(type);
  console.log(message);
};

// asyncFunction2(2, "John");
asyncFunction2("warning", "invlaid credentials");

// hello form chaitra-grp
