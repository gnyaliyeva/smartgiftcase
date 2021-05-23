import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { themeSetter } from "./helpers/tools";

import Container from "./container";

import "./assets/scss/main.scss";

ReactDOM.render(
  <Router>
    <Switch>
      {themeSetter()}
      <Route path="/:code" exact children={<Container />} />
      <Route path="/" exact children={<Container />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
