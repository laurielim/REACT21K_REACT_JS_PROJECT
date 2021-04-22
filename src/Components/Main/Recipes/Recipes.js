import React, { Component } from "react";

import "./Recipe.css";
import { recipes } from "./recipeDb";
import RecipeCard from "./RecipeCard";

class Recipes extends Component {
	render() {
		const recipeList = recipes.map((recipe) => {
			const props = {
				name: recipe.name,
				imageURL: recipe.image,
				goToRecipe: () => console.log("Here is your recipe"),
			};
			return <RecipeCard {...props} />;
		});

		return (
			<div className='container'>
				<h1>This is the Recipe Page</h1>
				<div className='recipe-container'>
					<div className='recipe-scroll-wrapper'>{recipeList}</div>
				</div>
			</div>
		);
	}
}

export default Recipes;
