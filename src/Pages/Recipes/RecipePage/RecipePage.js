import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import "./RecipePage.css";

const RecipePage = () => {
	let { id } = useParams();
	let history = useHistory();
	const [recipe, setRecipe] = useState();

	useEffect(() => {
		const getData = async () => {
			if (!recipe) {
				const res = await axios.get("//localhost:3001/recipes/" + id);
				setRecipe(res.data);
			}
		};
		getData();
	});

	let recipeData = undefined;
	if (!recipe) {
		recipeData = <h1>Loading...</h1>;
	}

	if (recipe) {
		let altText = `Photo of ${recipe.name} from unsplash`;
		const listIngredients = (ingredients) =>
			ingredients.map((ingredient) => (
				<li>
					{ingredient.quantity} {ingredient.ingredient}
				</li>
			));
		const listSteps = (steps) => steps.map((step) => <li>{step.text}</li>);

		recipeData = (
			<>
				<h1>{recipe.name}</h1>
				<p>{recipe.description}</p>
				<div className='recipe-container flex'>
					<div className='img-container'>
						<img src={recipe.image} alt={altText} />
					</div>
					<section className='ingredients-container'>
						<h2>Ingredients</h2>
						<ul>{listIngredients(recipe.recipeIngredient)}</ul>
					</section>
					<section className='ingredients-container'>
						<h2>Recipe</h2>
						<ol>{listSteps(recipe.recipeInstructions)}</ol>
					</section>
				</div>
				<button onClick={() => history.goBack()}>Back to Recipes</button>
			</>
		);
	}
	return <div className='container recipe'>{recipeData}</div>;
};

export default RecipePage;