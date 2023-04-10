import React, { useState } from "react";
import ChildComponent from "./childComponent";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodos] = useState(["todo1", "todo2"]);

  return (
    <div>
      <ChildComponent todoList={todo} />
      {count}
      <button onClick={() => setCount(count + 1)}>
        <h1>Click here !</h1>
      </button>
    </div>
  );
};

export default MemoExample;
