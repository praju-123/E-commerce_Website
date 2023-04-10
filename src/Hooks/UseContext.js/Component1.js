/* eslint-disable import/no-anonymous-default-export */
import React, { useState, createContext } from "react";
import { Component2 } from "./Component2";

export const UserContext = createContext();
const Component1 = () => {
  const [hello, setHello] = useState("RIYANSH");

  return (
    <UserContext.Provider value={hello}>
      <div>
        <h1> Hello there first component {hello}</h1>
        <Component2 />
      </div>
    </UserContext.Provider>
  );
};

// eslint-disable-next-line no-undef
export default Component1;
