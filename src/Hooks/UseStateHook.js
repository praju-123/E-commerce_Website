import React, { useState, useEffect } from "react";

const UseStateHook = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(0);
  const [calcilation, setCalcilation] = useState(0);
  const [car, setCar] = useState({
    name: "ford",
    brand: "primium",
  });

  useEffect(() => {
    setCalcilation(() => count * 2);
  }, [count]); // <- add empty brackets here

  return (
    <div>
      <h1>the color of state is {color} </h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <h2> the count is {count}</h2>
      <h3> The calculation is {calcilation}</h3>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("yellow")}> yellow</button>
      <button onClick={() => setColor("yellow")}> yellow</button>

      <button
        onClick={() =>
          setCar((previouState) => {
            return { ...previouState, name: "suv" };
          })
        }
      >
        changes the name of car
      </button>

      <h2>
        {" "}
        the car is {car.name} and the brand name is {car.brand}
      </h2>
    </div>
  );
};

export default UseStateHook;
