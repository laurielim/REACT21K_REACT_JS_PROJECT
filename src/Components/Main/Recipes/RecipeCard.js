import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ imageURL, name, goToRecipe }) => {
	let altText = `Picture of ${name} from Unsplash`;
	return (
		<div className='recipe-card'>
			<div className='recipe-img-container'>
				<img src={imageURL} alt={altText} />
			</div>
			<h3>{name}</h3>
			<Link onClick={goToRecipe} className='recipe-card-link'>
				See Recipe
			</Link>
		</div>
	);
};

export default RecipeCard;
