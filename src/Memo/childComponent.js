import React, { memo } from "react";

const ChildComponent = ({ todoList }) => {
  console.log("CHILD RENDERING");

  return (
    <div>
      <h2>My Todos</h2>
      {todoList.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default memo(ChildComponent);
