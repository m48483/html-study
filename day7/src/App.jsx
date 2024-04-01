import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Person from "./components/Person";
import Boxes from "./components/Boxes";
import Counter from "./components/Counter";
// import java.util.List;
// html 태그를 리턴하는 파일을 jsx
//                        csr client side render ssr server side render
// 초기 속도(사이트 접속했을때)   느림              빠름
// 그후부터의 속도                빠름              느림

function App() {
  //  [변수, set함수] = useState(초기값);
  const [age, setAge] = useState(10);

  return (
    <div className="App">
      <Counter />
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <br />
      <Person age={age} />
      <Person age={age} />
      <Person age={age} />
      <Boxes />
    </div>
  );
}

export default App;
