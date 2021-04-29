import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import "./Main.css";
import Home from "../../Pages/Home/Home";
import Recipes from "../../Pages/Recipes/Recipes";
import About from "../../Pages/About/About";

const Main = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const getData = async () => {
			let res = await axios(`//localhost:3001/recipes`);
			setRecipes(res.data);
		};
		getData();
	}, []);

	return (
		<main>
			<Switch>
				<Route exact path='/'>
					<Home recipes={recipes} />
				</Route>
				<Route path='/recipes'>
					<Recipes recipes={recipes} />
				</Route>
				<Route path='/about' component={About} />
			</Switch>
		</main>
	);
};

export default Main;
