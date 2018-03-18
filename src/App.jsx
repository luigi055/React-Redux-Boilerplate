// @flow
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { hot } from "react-hot-loader";

/* eslint-disable */
import "./favicon.ico";

/* eslint-enable */

import "./App.scss";

import Routes from "./routes/routes";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default hot(module)(App);
