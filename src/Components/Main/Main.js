import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";
import Home from "../../Pages/Home/Home";
import Recipes from "../../Pages/Recipes/Recipes";
import About from "../../Pages/About/About";

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
