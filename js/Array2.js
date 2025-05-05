const students = [
  { name: "John", paidStatus: true, scholarship: true },
  { name: "Jane", paidStatus: false, scholarship: false },
  { name: "Bob", paidStatus: true, scholarship: true },
  { name: "Alice", paidStatus: false, scholarship: true },
];

// students.forEach((s) => {
//   //   if (s.paidStatus && s.scholarship) {
//   if (!s.paidStatus || s.scholarship) {
//     console.log(`${s.name} can give exam`);
//   } else {
//     console.log(`${s.name} cannot give exam`);
//   }
// });

// students.map((s) => {
//   //   if (s.paidStatus && s.scholarship) {
//   if (!s.paidStatus || s.scholarship) {
//     console.log(`${s.name} can give exam`);
//   } else {
//     console.log(`${s.name} cannot give exam`);
//   }
// });

for (let i = 0; i < students.length; i++) {
  const element = students[i];
  if (element.paidStatus || element.scholarship) {
    console.log(`${element.name} can give exam`);
  } else {
    console.log(`${element.name} cannot give exam`);
  }
}
