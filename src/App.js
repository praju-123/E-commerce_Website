import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./containers/Header";
import ProductComponent from "./containers/ProductComponent";
import ProductListing from "./containers/ProductListing";
import { ProductDetails } from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />

          <Route path="/product/:productId" component={ProductDetails} />

          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
