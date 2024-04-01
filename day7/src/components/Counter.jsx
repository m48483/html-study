// Counter.jsx

import { useState } from "react";

// function return을 html 태그들 하는 것
const Counter = () => {
  // DOM에 넣어주기 위해 Set이 필요한 것
  const [i, setI] = useState(0);
  const [result, setResult] = useState(0);
  const onClickDiv = () => {
    if (i == 0) alert("0으로 나눌 순 없어요");
    else {
      setResult(result / i);
      setlogs([...logs, `${result}+${i}=${Number(result + i)}`]);
    }
  };

  const onClickCal = (o) => {
    let strResult = 0;
    switch (o) {
      case "+": {
        setResult(result + i);
        strResult = result + i;
        break;
      }
      case "-": {
        setResult(result - i);
        strResult = result - i;
        break;
      }
      case "*": {
        setResult(result * i);
        strResult = result * i;
        break;
      }
      case "/": {
        setResult(result / i);
        strResult = result / i;
        break;
      }
    }
    setlogs([...logs, `${result}${o}${i}=${strResult}`]);
  };
  const [logs, setlogs] = useState([]);
  const onClickAdd = () => {
    setResult(result + i);
    console.log(result);
    // 함수가 다 끝날 때 리렌더링 된다
    setlogs([...logs, `${result}+${i}=${Number(result + i)}`]);
  };
  return (
    <div>
      {/* <h1>{i}</h1>
      <button onClick={() => setI(i + 1)}>up</button>
      <button onClick={() => console.log(i)}>check</button> */}
      <h1>{result}</h1>
      <input
        type="number"
        // onChange={(e) => setI(parseInt(e.target.value, 10))}
        onChange={(e) => setI(Number(e.target.value))}
        value={i}
      />
      {/* <button onClick={onClickAdd}>+</button>
      <button onClick={() => setResult(result - i)}>-</button>
      <button onClick={() => setResult(result * i)}>*</button>
      {i != 0 && <button onClick={onClickDiv}>/</button>} */}
      <button onClick={() => onClickCal("+")}>+</button>
      <button onClick={() => onClickCal("-")}>-</button>
      <button onClick={() => onClickCal("*")}>*</button>
      {i != 0 && <button onClick={() => onClickCal("/")}>/</button>}
      {/* 삼항연산자 && 뜻: 앞이 맞으면 뒤 실행 || 틀리면 뒤 실행 */}
      <button onClick={() => setResult(0)}>clear</button>
      {logs.map((str, i) => (
        <p key={i}>{str}</p>
      ))}
    </div>
  );
};
export default Counter;
