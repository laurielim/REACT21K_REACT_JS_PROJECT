import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const RecipeCard = ({ imageURL, name, id }) => {
	let altText = `Picture of ${name} from Unsplash`;
	let { url } = useRouteMatch();
	return (
		<div className='recipe-card'>
			<div className='recipe-img-container'>
				<img src={imageURL} alt={altText} />
			</div>
			<h3>{name}</h3>
			<Link to={`${url}/${id}`} className='recipe-card-link'>
				See Recipe
			</Link>
		</div>
	);
};

export default RecipeCard;
