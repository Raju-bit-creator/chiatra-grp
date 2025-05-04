let students = [
  {
    name: "John",
    course: "mern-stack",
    grade: 90,
  },
  {
    name: "Bishnu",
    course: "python",
    grade: 50,
  },
  {
    name: "Ram",
    course: "Datascience",
    grade: 60,
  },
  {
    name: "Niyaz",
    course: "Digital marketing",
    grade: 70,
  },
];
//  to print name only
students.map((c) => {
  console.log(c.course);
});
// using for loop
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  console.log(element.course);
}
