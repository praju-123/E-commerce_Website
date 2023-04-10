import React, { useState, useEffect, useContext } from "react";
import "./component/App.css";

function App(props) {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  return (
    <>
      <h1 style={myStyle}> Let's learn styling {props.color}</h1>

      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
