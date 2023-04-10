import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [vale, setValue] = useState("");
  const inputElement = useRef();

  const focusElemnt = () => {
    inputElement.current.focus();
  };
  const count = useRef(0);
  const [countNew, setNewCount] = useState(0);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    count.current = count.current + 1;
    // setNewCount(countNew + 2);
  });

  console.log(vale);
  return (
    <div>
      <input
        type="text"
        value={vale}
        // ref={inputElement}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={focusElemnt}> focus on input</button>
      <h1>let's see howmany times component re-render</h1>

      <p>COUNT: {count.current}</p>
    </div>
  );
};

export default UseRef;
