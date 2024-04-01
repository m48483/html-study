function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

console.log(diff(sum(1, 3), 1));

// 함수는 const만 쓴다고 보면 됨

const sum1 = (a, b = 1) => {
  return a + b;
};
console.log(sum1(1));

const diff1 = (a, b) => a - b;

const division = (a, b) => {
  const sum = () => {
    return a + b;
  };
  return sum() / b;
};

console.log(division(1, 3));

const diff2 = (a, b = 2) => a - b;
const sum2 = (a, b = 2) => a + b;

const multi2 = (a, b = 2) => a * b;
const division2 = (a, b = 2) => a / b;

console.log(diff2(sum2(diff2(sum2(3)), 10), 4));

console.log(sum2);

const list = [diff2, sum2, multi2, division2, (a) => a * a];

console.log(list[0](21)); // 괄호가 붙으면 값이 된다

let total = 0;
for (let i = 0; i < list.length; i++) {
  total += list[i](i, 10);
}
console.log(total);

const pow = list[4];

const [sum3, dii3, multi3, division3, pow3] = list;
console.log(sum3(1, 2));
