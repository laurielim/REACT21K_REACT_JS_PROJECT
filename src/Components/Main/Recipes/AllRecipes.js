import React from "react";

import RecipeCard from "./RecipeCard";
import RecipeCategory from "./RecipeCategory";

const AllRecipes = ({ recipes, isLoading }) => {
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

	return (
		<div className='recipes-container'>
			<RecipeCategory
				categoryName='The Unforgettables'
				categoryRecipeCards={filterUnforgettables}
			/>
			<RecipeCategory
				categoryName='Contemporary Classics'
				categoryRecipeCards={filterClassics}
			/>
			<RecipeCategory
				categoryName='New Era Drinks'
				categoryRecipeCards={filterNew}
			/>

			{filterOther.length > 0 ? (
				<RecipeCategory
					categoryName='Contributed Recipes'
					categoryRecipeCards={filterOther}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default AllRecipes;
