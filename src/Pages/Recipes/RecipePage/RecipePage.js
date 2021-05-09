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
					"//laurielim-thecocktailapp-api.herokuapp.com/recipes/" + id
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
		let altText = `Photo of ${recipe.name} by  ${recipe.image.author}`;
		const listIngredients = (ingredients) =>
			ingredients.map((ingredient) => (
				<li key={ingredient.id}>
					{ingredient.quantity} {ingredient.ingredient}
				</li>
			));
		const listSteps = (steps) =>
			steps.map((step) => (
				<li key={step.id}>
					<p>{step.step}</p>
				</li>
			));

		recipeData = (
			<>
				<h1>{recipe.name}</h1>
				<p>{recipe.description}</p>
				<div className='recipe-container'>
					<div className='img-container'>
						<img src={recipe.image.url} alt={altText} />
						<p className='img-attribution'>
							Photo by <a href={recipe.image.source}>{recipe.image.author}</a>,
							licensed under {recipe.image.license}
						</p>
					</div>
					<section className='ingredients-container'>
						<h2>Ingredients</h2>
						<ul>{listIngredients(recipe.recipeIngredient)}</ul>
						<p>
							Garnish: {recipe.recipeGarnish ? recipe.recipeGarnish : "None."}
						</p>
					</section>
					<section className='instructions-container'>
						<h2>Recipe</h2>
						<ol>{listSteps(recipe.recipeInstructions)}</ol>
					</section>
				</div>
				<div className='flex-content'>
					<button onClick={() => history.goBack()}>Go Back</button>
				</div>
			</>
		);
	}
	return <div className='container recipe'>{recipeData}</div>;
};

export default RecipePage;
