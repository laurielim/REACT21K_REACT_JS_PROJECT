import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
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

	const [searchValue, setSearchValue] = useState("");

	const searchValueHandler = (e) => {
		setSearchValue(e.target.value);
	};

	let history = useHistory();
	const searchFormHandler = (e) => {
		e.preventDefault();
		setSearchValue(e.target.homeSearchBar.value);
		console.log(searchValue);
		history.push("/recipes");
	};

	return (
		<main>
			<Switch>
				<Route exact path='/'>
					<Home recipes={recipes} search={searchFormHandler} />
				</Route>
				<Route path='/recipes'>
					<Recipes
						recipes={recipes}
						search={searchValueHandler}
						searchValue={searchValue}
					/>
				</Route>
				<Route path='/about' component={About} />
			</Switch>
		</main>
	);
};

export default Main;
