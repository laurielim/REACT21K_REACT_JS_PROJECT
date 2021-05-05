import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AddRecipe.css";

const AddRecipe = () => {
	const [data, setData] = useState({
		name: "",
		desc: "",
		ingredients: [],
		garnish: "",
		instructions: [],
	});

	const [ingredients, setIngredients] = useState([
		{ id: 1, ingredient: "", quantity: "" },
	]);

	const [steps, setSteps] = useState([{ id: 1, step: "" }]);

	const updateData = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const updateList = (e, i) => {
		const { name, value } = e.target;
		if (name === "step") {
			const list = [...steps];
			list[i][name] = value;
			setSteps(list);
			setData({ ...data, instructions: steps });
		} else {
			const list = [...ingredients];
			list[i][name] = value;
			setIngredients(list);
			setData({ ...data, ingredients: ingredients });
		}
	};

	const addMoreIngredients = (e, i) => {
		e.preventDefault();
		const newIngredient = {
			id: ingredients.length + 1,
			ingredient: "",
			quantity: "",
		};
		setIngredients([...ingredients, newIngredient]);
	};

	const addMoreSteps = (e, i) => {
		e.preventDefault();
		const newStep = { id: steps.length + 1, step: "" };
		setSteps([...steps, newStep]);
	};

	const submitData = (e) => {
		axios.post("http://localhost:3001/recipes", data);
	};

	return (
		<div className='container add-recipe'>
			<h1>Add Your Recipe</h1>

			<Form onSubmit={submitData}>
				<section className='form-section'>
					<Form.Group>
						<h2>
							<Form.Label>Cocktail Name</Form.Label>
						</h2>
						<Form.Control
							size='lg'
							type='text'
							name='name'
							onChange={updateData}
						/>
					</Form.Group>
					<Form.Group>
						<h2>
							<Form.Label htmlFor=''>Description</Form.Label>
						</h2>
						<Form.Control
							as='textarea'
							rows={3}
							type='text'
							name='desc'
							size='lg'
							onChange={updateData}
						/>
					</Form.Group>
				</section>
				<section className='form-section'>
					<Form.Group>
						<h2>
							<Form.Label htmlFor=''>Image Link</Form.Label>
						</h2>
						<Form.Control
							type='url'
							name='image'
							size='lg'
							onChange={updateData}
						/>
					</Form.Group>
				</section>
				<section className='form-section'>
					<h2>Ingredients</h2>
					{ingredients.map((_, i) => {
						return (
							<div className='list-inputs' key={i}>
								<Form.Group>
									<Row>
										<Col>
											<h3>
												<Form.Label htmlFor=''>Quantity</Form.Label>
											</h3>
											<Form.Control
												type='text'
												name='quantity'
												size='lg'
												onChange={(e) => updateList(e, i)}
											/>
										</Col>
										<Col>
											<h3>
												<Form.Label htmlFor=''>Ingredient</Form.Label>
											</h3>
											<Form.Control
												type='text'
												name='ingredient'
												size='lg'
												onChange={(e) => updateList(e, i)}
											/>
										</Col>
									</Row>
								</Form.Group>
							</div>
						);
					})}

					<button onClick={addMoreIngredients}>Add More Ingredients</button>
				</section>
				<section className='form-section'>
					<h2>Instructions</h2>

					{steps.map((_, i) => {
						return (
							<div className='list-inputs' key={i}>
								<Form.Group>
									<h3>
										<Form.Label htmlFor=''>Step {1 + i}</Form.Label>
									</h3>
									<Form.Control
										type='text'
										name='step'
										size='lg'
										onChange={(e) => updateList(e, i)}
									/>
								</Form.Group>
							</div>
						);
					})}
					<button onClick={addMoreSteps}>Add More Steps</button>
				</section>
				<button type='submit'>Post Recipe</button>
			</Form>
		</div>
	);
};

export default AddRecipe;
