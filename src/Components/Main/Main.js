import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
};

export default Main;
