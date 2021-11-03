import React from "react";
import "./Content.css";
import { Switch, Route } from "react-router-dom";

import About from "../../views/example/About";
import Home from "../../views/example/Home";

export default (props) => {
  return (
    <main className="Content">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
};
