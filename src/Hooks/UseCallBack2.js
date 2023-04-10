import React, { useState } from "react";
import { Display } from "../component/Display";

export const UseCallBack2 = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <Display />
      <hr />
      <p> count is: {count}</p>
      <button onClick={increament}>count</button>
    </>
  );
};
