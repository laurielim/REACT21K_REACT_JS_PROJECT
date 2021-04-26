import React, { Component } from "react";

import "./Recipe.css";
import { recipes } from "../../Components/Main/Recipes/recipeDb";
import RecipeCard from "../../Components/Main/Recipes/RecipeCard";
import AllRecipes from "../../Components/Main/Recipes/AllRecipes";
import RecipeSearchResult from "../../Components/Main/Recipes/RecipeSearchResult";

class Recipes extends Component {
	state = {
		searchInput: "",
	};

	searchValueHandler = (event) => {
		this.setState({ searchInput: event.target.value });
	};

	render() {
		const displayAllRecipes = () => {
			const filteredRecipeList = (condition) => {
				return recipes
					.filter((recipe) => {
						return Math.floor(recipe.id / 100) === condition;
					})
					.map((recipe) => {
						const props = {
							name: recipe.name,
							imageURL: recipe.image,
							goToRecipe: () => console.log("Here is your recipe"),
						};
						return <RecipeCard {...props} />;
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
				return recipe.name
					.toLowerCase()
					.includes(this.state.searchInput.toLowerCase());
			});

			const recipeList = recipeFilter.map((recipe) => {
				const props = {
					name: recipe.name,
					imageURL: recipe.image,
					goToRecipe: () => console.log("Here is your recipe"),
				};
				return <RecipeCard {...props} />;
			});

			return <RecipeSearchResult result={recipeList} />;
		};

		return (
			<div className='container recipe'>
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
							onChange={this.searchValueHandler}
						/>
					</form>
				</div>
				{this.state.searchInput === ""
					? displayAllRecipes()
					: displaySearchResult()}
			</div>
		);
	}
}

export default Recipes;
