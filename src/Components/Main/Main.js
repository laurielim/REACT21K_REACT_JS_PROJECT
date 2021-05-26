import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";

import "./Main.css";
import Home from "../../Pages/Home/Home";
import Recipes from "../../Pages/Recipes/Recipes";
import About from "../../Pages/About/About";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";

const Main = () => {
	const [searchValue, setSearchValue] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const getData = async () => {
			try {
				let res = await axios(
					`//laurielim-thecocktailapp-api.herokuapp.com/recipes`
				);
				setRecipes(res.data.result);
				setIsLoading(false);
			} catch (err) {
				console.error(err);
			}
		};
		getData();
	}, []);

	const searchValueHandler = (e) => {
		setSearchValue(e.target.value);
	};

	const resetSearchHandler = () => setSearchValue("");

	let history = useHistory();
	const searchFormHandler = (e) => {
		e.preventDefault();
		setSearchValue(e.target.homeSearchBar.value);
		history.push("/recipes");
	};

	const randomRecipeHandler = () => {
		let category = Math.ceil(Math.random() * 3);
		let recipeId = Math.ceil(Math.random() * 10);
		history.push(`/recipes/${category}${recipeId.toString().padStart(2, "0")}`);
	};

	return (
		<main>
			<Switch>
				<Route exact path='/'>
					<Home
						search={searchFormHandler}
						pickRandomRecipe={randomRecipeHandler}
					/>
				</Route>
				<Route path='/recipes'>
					<Recipes
						recipes={recipes}
						isLoading={isLoading}
						search={searchValueHandler}
						searchValue={searchValue}
						resetSearchBar={resetSearchHandler}
					/>
				</Route>
				<Route path='/about' component={About} />
				<Route path='*' component={PageNotFound} />
			</Switch>
		</main>
	);
};

export default Main;
