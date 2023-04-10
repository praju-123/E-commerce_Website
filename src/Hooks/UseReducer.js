import React, { useReducer } from "react";

var initialState = 0;

const reducer = (state, action) => {
  //   console.log(state);
  if (action.type === "increament") {
    console.log(state);
    return (state += 1);
  }
  if (action.type === "decreament") {
    return (state -= 1);
  }
  return state;
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Item = () => <div>ITEM</div>;

  return (
    <Item />
    // <div>
    //   <h1>
    //     INCREAMENT
    //     <button onClick={() => dispatch({ type: "increament" })}>+</button>
    //   </h1>
    //   <h1>
    //     DECREAMENT
    //     <button onClick={() => dispatch({ type: "decreament" })}>- </button>
    //   </h1>

    //   <h2>let STATE is :{state}</h2>
    // </div>
  );
};
