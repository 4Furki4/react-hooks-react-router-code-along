import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);