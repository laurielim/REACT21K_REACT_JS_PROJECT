import React from "react";

import RecipeCategory from "./RecipeCategory";

const AllRecipes = ({ Unforgettables, Classics, New, Other }) => {
	return (
		<div className='recipes-container'>
			<RecipeCategory
				categoryName='The Unforgettables'
				categoryRecipeCards={Unforgettables}
			/>
			<RecipeCategory
				categoryName='Contemporary Classics'
				categoryRecipeCards={Classics}
			/>
			<RecipeCategory categoryName='New Era Drinks' categoryRecipeCards={New} />

			{Other.length > 0 ? (
				<RecipeCategory
					categoryName='Contributed Recipes'
					categoryRecipeCards={Other}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default AllRecipes;
