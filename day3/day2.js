// let 변하는 변수 const 상수
// 반복문에서는 let을 사용
// let i = 0;
// const i = 0;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   // if (i % 2 == 0) console.log(i);
//   if (i != "0") console.log(i);
//   else if (i === 0) console.log(true);
// }
// if ("1" == true) console.log("같다");

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i / 2; j++) {
    //제곱근 i/2
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
