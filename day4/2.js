const students = [
  { name: "김부자", age: 22, isAdult: false },
  { name: "조진호", age: 32, isAdult: false },
  { name: "김세현", age: 15, isAdult: false },
  { name: "정희석", age: 33, isAdult: false },
];

// for (let i = 0; i < students.length; i++) students[i].age++;
// console.log(students);

const ageup = [];
// 1.
// for (let i = 0; i < students.length; i++) {
//   const obj = { name: students[i].name, age: students[i].age + 1 };
//   ageup.push(obj);
// }
// 2. spread 구문 (전개 구문)
for (let i = 0; i < students.length; i++) {
  const obj = { ...students[i], age: students[i].age + 1 };
  ageup.push(obj);
}
console.log(ageup);
console.log(students);
console.log({ ...students[0] });
console.log({ ...students[0], age: students[0].age + 1 });

const [b, jh] = students;
console.log(jh);

const { name, age } = jh;
console.log(name, age);

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const { age } = student;
  const obj = { ...student, age: age + 1 };
  ageup.push(obj);
}

const isAdults = [];
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  isAdults.push({ ...student, isAdult: student.age > 19 });
}

console.log(isAdults);
