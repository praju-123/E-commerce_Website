import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const elementWithouJSX = React.createElement("h2", {}, "we are not used jsx");
// const elementWithJSX = <h1>This is the initial example of React.JS</h1>;
const cars = [
  { id: 1, brand: "suv" },
  { id: 2, brand: "maruti" },
  { id: 3, brand: "tata" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello, world</h1>;
// const elementWithouJSX = React.createElement("h2", {}, "we are not used jsx");
// root.render(elementWithouJSX);

root.render(
  <React.StrictMode>
    <div>E-Commerce Website</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
