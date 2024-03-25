const list = [1, 4, 5, 21, 42, 1, 3, 57, 9, 5231];
// 짝수인지 아닌지 하나하나 계산해서 리스트로 만들어 보여주기

const isEven = [];
for (let i = 0; i < list.length; i++) {
  isEven.push(list[i] % 2 == 0 ? true : false);
}

console.log(isEven);

// map은 기존 리스트를 가지고 새로운 값이다른 리스트를 만드는 것
const isEvenList = list.map((isEven, index, arr) => {
  //   console.log(isEven, index, arr);
  return isEven % 2 === 0;
});

console.log(isEvenList);
