import React, { useMemo, useState, useRef } from "react";

export const UseMemo2 = () => {
  // const [count, setCount] = useState(0);
  const [todo, setTodos] = useState([]);

  // const expensesTracker = (num) => {
  //   console.log("it's calculating");
  //   for (let i = 1; i <= 1000000; i++) {
  //     num += 1;
  //   }
  //   return num;
  // };

  // const calculation = useMemo(() => expensesTracker(count), [count]);
  // //   const calculation = expensesTracker(count);
  // //   const calculation = useMemo(() => {
  // //     expensesTracker(count);
  // //   }, [count]);

  // const Increament = () => {
  //   setCount((c) => c + 1);
  // };

  // const addTodo = () => {
  //   setTodos((t) => [...t, "NewTodo"]);
  // };
  const togglerRef = useRef(null);

  const buttonClickHandler = () => {
    alert("button clicked");
  };

  // togglerRef.current.click();

  return (
    <div className="App">
      <button ref={togglerRef} onClick={buttonClickHandler}>
        toggle button
      </button>
    </div>
  );
};
