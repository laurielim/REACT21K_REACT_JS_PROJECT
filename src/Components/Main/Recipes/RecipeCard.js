import React from "react";

const RecipeCard = ({ imageURL, name, goToRecipe }) => {
	let altText = `Picture of ${name} from Unsplash`;
	return (
		<div className='recipe-card'>
			<img src={imageURL} alt={altText} />
			<h3>{name}</h3>
			<button onClick={goToRecipe}>See Recipe</button>
		</div>
	);
};

export default RecipeCard;
