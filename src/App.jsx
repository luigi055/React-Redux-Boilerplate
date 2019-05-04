// @flow
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { hot } from "react-hot-loader";

import "./favicon.ico";

import "./App.css";

import Routes from "./routes/routes";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default hot(module)(App);
