import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import "./Recipe.css";
import RecipeCard from "../../Components/Main/Recipes/RecipeCard";
import AllRecipes from "../../Components/Main/Recipes/AllRecipes";
import RecipeSearchResult from "../../Components/Main/Recipes/RecipeSearchResult";
import RecipePage from "./RecipePage/RecipePage";
import AddRecipe from "./AddRecipe/AddRecipe";

const Recipes = ({
	recipes,
	isLoading,
	searchValue,
	search,
	resetSearchBar,
}) => {
	let { url } = useRouteMatch();

	const displayAllRecipes = () => {
		const filteredRecipeList = (condition) => {
			if (isLoading) {
				return <h2>Loading...</h2>;
			}
			return recipes
				.filter((recipe) => {
					return Math.floor(recipe.id / 100) === condition;
				})
				.map((recipe) => {
					const props = {
						name: recipe.name,
						imageURL: recipe.image,
						id: recipe.id,
					};
					return <RecipeCard key={recipe.id} {...props} />;
				});
		};

		const filterUnforgettables = filteredRecipeList(1);
		const filterClassics = filteredRecipeList(2);
		const filterNew = filteredRecipeList(3);
		const filterOther = filteredRecipeList(0);

		const props = {
			Unforgettables: filterUnforgettables,
			Classics: filterClassics,
			New: filterNew,
			Other: filterOther,
		};

		return <AllRecipes {...props} />;
	};

	const displaySearchResult = () => {
		const recipeFilter = recipes.filter((recipe) => {
			let resp =
				recipe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
				recipe.ingredients.includes(searchValue.toLowerCase());
			return resp;
		});

		if (recipeFilter.length !== 0) {
			const recipeList = recipeFilter.map((recipe) => {
				const props = {
					name: recipe.name,
					imageURL: recipe.image,
					id: recipe.id,
				};
				return <RecipeCard key={recipe.id} {...props} />;
			});
			return <RecipeSearchResult result={recipeList} />;
		} else {
			let suggestedDrink = [];
			for (let i = 0; i < 2; i++) {
				let drinkIndex = Math.floor(Math.random() * recipes.length);
				let props = {
					name: recipes[drinkIndex].name,
					imageURL: recipes[drinkIndex].image,
					id: recipes[drinkIndex].id,
				};
				suggestedDrink[i] = <RecipeCard key={recipes[i].id} {...props} />;
			}

			return (
				<div className='recipes-container'>
					<h2>Sorry, no recipe found. Maybe try one of these:</h2>
					{suggestedDrink}
				</div>
			);
		}
	};

	return (
		<Switch>
			<Route path={url} exact>
				<div className='container recipes'>
					<div className='flex-content'>
						<h1 className='pdr-3rem'>Recipes</h1>
						<form className='flex-content' onSubmit={(e) => e.preventDefault()}>
							<label htmlFor='searchRecipe' className='visually-hidden'>
								Search Recipe:
							</label>
							<input
								value={searchValue}
								type='text'
								name='searchRecipe'
								id='searchRecipe'
								className='search-bar'
								onChange={search}
							/>
							<button type='reset' onClick={resetSearchBar}>
								Clear<span className='visually-hidden'> search bar</span>
							</button>
						</form>
					</div>
					<div>
						<p>
							Browse through IBA Official Cocktails or{" "}
							<Link to={`${url}/new`}>add your own recipe</Link>.
						</p>
					</div>
					{searchValue === "" ? displayAllRecipes() : displaySearchResult()}
				</div>
			</Route>
			<Route path={`${url}/new`}>
				<AddRecipe />
			</Route>
			<Route path={`${url}/:id`}>
				<RecipePage />
			</Route>
		</Switch>
	);
};

export default Recipes;
