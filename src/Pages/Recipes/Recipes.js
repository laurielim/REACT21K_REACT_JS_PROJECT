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
	searchValue,
	search,
	isLoading,
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

		const props = {
			Unforgettables: filterUnforgettables,
			Classics: filterClassics,
			New: filterNew,
		};

		return <AllRecipes {...props} />;
	};

	const displaySearchResult = () => {
		const recipeFilter = recipes.filter((recipe) => {
			return recipe.name.toLowerCase().includes(searchValue.toLowerCase());
		});

		const recipeList = recipeFilter.map((recipe) => {
			const props = {
				name: recipe.name,
				imageURL: recipe.image,
				id: recipe.id,
			};
			return <RecipeCard key={recipe.id} {...props} />;
		});

		return <RecipeSearchResult result={recipeList} />;
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
					{searchValue === "" ? displayAllRecipes() : displaySearchResult()}
					<div>
						<Link to={`${url}/new`}>Add New Recipe</Link>
					</div>
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
