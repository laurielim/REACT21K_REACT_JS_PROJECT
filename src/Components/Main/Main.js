import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";
import Home from "./Home/Home";
import Recipes from "./Recipes/Recipes";
import About from "./About/About";

const Main = () => {
	return (
		<main>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/recipes' component={Recipes} />
				<Route path='/about' component={About} />
			</Switch>
		</main>
	);
};

export default Main;
