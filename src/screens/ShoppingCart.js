import React, { useState } from "react";

export const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "milk", price: 30, quantity: 0 },
    { id: 2, name: "cheese", price: 100, quantity: 0 },
    { id: 3, name: "flour", price: 70, quantity: 0 },
    { id: 4, name: "rice flour", price: 40, quantity: 0 },
    { id: 5, name: "oil", price: 100, quantity: 0 },
    { id: 6, name: "olives", price: 300, quantity: 0 },
  ]);
  const [state, setState] = useState(1);
  // const [quantity, setQuantity] = useState(0);

  var ColorCode =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  const itemsAvailable = [
    { id: 1, name: "milk", price: 30, quantity: 0 },
    { id: 2, name: "cheese", price: 100, quantity: 0 },
    { id: 3, name: "flour", price: 70, quantity: 0 },
    { id: 4, name: "rice flour", price: 40, quantity: 0 },
    { id: 5, name: "oil", price: 100, quantity: 0 },
    { id: 6, name: "olives", price: 300, quantity: 0 },
  ];

  const buttonClick = (data) => {
    setState(data.id);
    if (cart.map((s) => s.id).includes(data.id)) {
      // eslint-disable-next-line no-const-assign
      setCart((prevState) => [...prevState, (data.quantity += 1)]);
    }

    // if (!cart.map((s) => s.id).includes(data.id)) {
    //   setCart((prevValu) => [...prevValu, data]);
    // }
  };

  const removeItem = () => {
    setCart(cart.filter((val) => val.id !== cart[cart.length - 1].id));
  };

  console.log("cart is", cart);
  return (
    <div>
      <h1>ShoppingCart</h1>
      {cart.map((data) => (
        <li key={data.id}>
          <button
            key={data.id}
            onClick={() => buttonClick(data)}
            style={{ backgroundColor: state === data.id ? "yellow" : "" }}
          >
            {data.name} {data.quantity}
          </button>
        </li>
      ))}

      <h2>Selected item</h2>
      {/* {cart.map((val) => (
        <p style={{ flex: 1, flexDirection: "row", color: "red" }} key={val.id}>
          {val}
        </p>
      ))} */}

      <button onClick={removeItem}>Remove selected item</button>
    </div>
  );
};
