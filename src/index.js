import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";

import "./main.scss";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/:code" exact children={<App />} />
      <Route path="/" exact children={<App />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
