// list, object
// int[] arr=new int[123];
// const list = [];
// arr[0]=1;
// list.add(1);

// console.log(list);
// console.log(list[0]);
// console.log(list.length);

// 369 게임
// js에서 3=삼항연산자 지향
const list369 = [];
for (let i = 1; i <= 100; i++) {
  let num = i % 10;
  if (num != 0 && num % 3 == 0) {
    list369.push("짝");
  } else if (i > 10 && ((i - num) / 10) % 3 == 0) {
    list369.push("짝");
  } else {
    list369.push(i);
  }
}
console.log(list369);

// 삼항연산자 지향
// .includes
const list369_2 = [];
for (let index = 1; index <= 100; index++) {
  const num =
    (index + "").includes("3") ||
    (index + "").includes("6") ||
    (index + "").includes("9")
      ? "짝"
      : index;
  list369_2.push(num);
}
console.log(list369_2);

const list = [];
for (let index = 100; index <= 1000; index++) {
  list.push(index);
}

const list369_cp = [];
for (let index = 0; index <= list.length; index++) {
  const num =
    (list[index] + "").includes("3") ||
    (list[index] + "").includes("6") ||
    (list[index] + "").includes("9")
      ? "짝"
      : list[index];
  list369_cp.push(num);
}
console.log(list369_cp);
