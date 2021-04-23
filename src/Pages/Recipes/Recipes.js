import React, { Component } from "react";

import "./Recipe.css";
import { recipes } from "../../Components/Main/Recipes/recipeDb";
import RecipeCard from "../../Components/Main/Recipes/RecipeCard";
import AllRecipes from "../../Components/Main/Recipes/AllRecipes";
import RecipeSearchResult from "../../Components/Main/Recipes/RecipeSearchResult";

class Recipes extends Component {
	state = {};
	render() {
		const recipeList = recipes.map((recipe) => {
			const props = {
				name: recipe.name,
				imageURL: recipe.image,
				goToRecipe: () => console.log("Here is your recipe"),
			};
			return <RecipeCard {...props} />;
		});

		const props = {
			Unforgettables: recipeList,
			Classics: recipeList,
			New: recipeList,
		};

		return (
			<div className='container'>
				<div className='flex-content'>
					<h1>Recipes</h1>
					<form>
						<label htmlFor='searchRecipe' className='visually-hidden'>
							Search Recipe:
						</label>
						<input
							type='text'
							name='searchRecipe'
							id='searchRecipe'
							className='search-bar'
						/>
					</form>
				</div>
				<AllRecipes {...props} />
			</div>
		);
	}
}

export default Recipes;
