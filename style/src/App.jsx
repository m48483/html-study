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
    </>
  );
}

export default App;
