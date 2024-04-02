import { useState } from "react";
import ViewCount from "../components/ViewCount";
import ChangeCount from "../components/ChangeCount";
import LogCount from "../components/LogCount";
import { useRecoilState } from "recoil";
import { countState } from "../store/CountState";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);
  console.log("COunter");
  return (
    <div className="container">
      <ViewCount />
      <ChangeCount />
      <hr className="m-4" />
      <LogCount logs={logs} />
    </div>
  );
};

export default Counter;
