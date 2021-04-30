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
				const res = await axios.get(
					"//safe-mesa-30631.herokuapp.com/recipes/" + id
				);
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
				<li key={ingredient.ingredient}>
					{ingredient.quantity} {ingredient.ingredient}
				</li>
			));
		const listSteps = (steps) =>
			steps.map((step) => (
				<li key={step.text}>
					<p>{step.text}</p>
				</li>
			));

		recipeData = (
			<>
				<h1>{recipe.name}</h1>
				<p>{recipe.description}</p>
				<div className='recipe-container'>
					<div className='img-container'>
						<img src={recipe.image} alt={altText} />
					</div>
					<section className='ingredients-container'>
						<h2>Ingredients</h2>
						<ul>{listIngredients(recipe.recipeIngredient)}</ul>
					</section>
					<section className='instructions-container'>
						<h2>Recipe</h2>
						<ol>{listSteps(recipe.recipeInstructions)}</ol>
					</section>
				</div>
				<div className='flex-content'>
					<button onClick={() => history.goBack()}>Back to Recipes</button>
				</div>
			</>
		);
	}
	return <div className='container recipe'>{recipeData}</div>;
};

export default RecipePage;
