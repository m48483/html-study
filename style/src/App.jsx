import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "reactstrap";
import { css } from "@emotion/css";

function App() {
  const [color, setColor] = useState("#000000"); // 초기 색상은 검정색으로 설정
  const [transtion, setTranstion] = useState(0);
  const [transform, setTransform] = useState(0);
  return (
    <>
      <div className="box"></div>
      <div className="box"></div>
      {/* <Button color="danger">danger</Button> */}
      {/* css in JS */}
      <input
        type="Number"
        placeholder={`숫자를 입력해 주세요`}
        onChange={(e) => setTranstion(e.target.value)}
      />
      <input
        type="Number"
        placeholder={`숫자를 입력해 주세요`}
        onChange={(e) => setTransform(e.target.value)}
      />
      <div
        className={css`
          width: 100px;
          height: 200px;
          background-color: ${color};
          &:hover {
            background-color: hotpink;
            transition: all ${transtion}s;
            transform: rotate(${transform}deg) scale(2);
          }
        `}
      ></div>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
    </>
  );
}

export default App;
