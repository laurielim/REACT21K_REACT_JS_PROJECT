import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import "./Recipe.css";
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
							<Link to={`${url}/new`}>add your recipe</Link>.
						</p>
					</div>
					{searchValue === "" ? (
						<AllRecipes recipes={recipes} isLoading={isLoading} />
					) : (
						<RecipeSearchResult recipes={recipes} searchValue={searchValue} />
					)}
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
