import React from "react";

import RecipeCard from "./RecipeCard";

const RecipeSearchResult = ({ recipes, searchValue }) => {
	const recipeFilter = recipes.filter((recipe) => {
		let resp =
			recipe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			recipe.ingredients.includes(searchValue.toLowerCase());
		return resp;
	});

	let result;

	if (recipeFilter.length !== 0) {
		result = recipeFilter.map((recipe) => {
			const props = {
				name: recipe.name,
				imageURL: recipe.image,
				id: recipe.id,
			};
			return <RecipeCard key={recipe.id} {...props} />;
		});
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

		result = (
			<>
				<h2>Sorry, no recipe found. Maybe try one of these:</h2>;
				{suggestedDrink}
			</>
		);
	}
	return <div className='recipes-container'>{result}</div>;
};

export default RecipeSearchResult;
