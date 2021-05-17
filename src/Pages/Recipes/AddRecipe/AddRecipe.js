import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import "./AddRecipe.css";

const AddRecipe = () => {
	let history = useHistory();
	const [data, setData] = useState({
		name: "",
		desc: "",
		imageLink: "",
		imageAuthor: "",
		imageLicense: "",
		ingredients: [],
		garnish: "",
		instructions: [],
	});

	const [showAlert, setShowAlert] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [showImageSection, setShowImageSection] = useState(false);

	const [ingredients, setIngredients] = useState([
		{ id: 1, ingredient: "", quantity: "" },
	]);

	const [steps, setSteps] = useState([{ id: 1, step: "" }]);

	const updateData = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const updateList = (e, i) => {
		const { name, value } = e.target;
		if (name.includes("step")) {
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
		e.preventDefault();
		setIsSending(true);
		axios
			.post("//laurielim-thecocktailapp-api.herokuapp.com/add", data)
			.then(() => {
				e.target.reset();
				setIsSending(false);
				setShowAlert(true);
				window.scrollTo(0, 0);
			});
	};

	return (
		<div className='container add-recipe'>
			<h1>Add Your Recipe</h1>
			<button onClick={() => history.goBack()}>Go Back</button>

			{showAlert && (
				<Alert
					className='recipe-added-alert'
					variant='success'
					onClose={() => setShowAlert(false)}
					dismissible
				>
					<Alert.Heading>Your recipe has been added!</Alert.Heading>
					<p>
						Go back to see your new recipe, or feel free to add another one.
					</p>
				</Alert>
			)}

			<Form onSubmit={submitData}>
				<section className='form-section'>
					<h2 className='form-subtitle'>Recipe Info</h2>
					<Form.Group>
						<Form.Label htmlFor='name'>Cocktail Name</Form.Label>

						<Form.Control
							size='lg'
							type='text'
							name='name'
							onChange={updateData}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor='desc'>Description</Form.Label>

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
					<h2 className='form-subtitle'>
						Image <span className='form-optional-tag'>- optional</span>
					</h2>
					{showImageSection ? (
						<>
							<Form.Group>
								<Form.Label htmlFor='imageLink'>Image Link</Form.Label>

								<Form.Control
									type='url'
									name='imageLink'
									size='lg'
									onChange={updateData}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='imageAuthor'>Image Author</Form.Label>
								<Form.Control
									type='text'
									name='imageAuthor'
									size='lg'
									onChange={updateData}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='imageLicense'>Image License</Form.Label>

								<Form.Control
									type='text'
									name='imageLicense'
									size='lg'
									onChange={updateData}
								/>
							</Form.Group>
						</>
					) : (
						<>
							<p>If you wish to add an image, we request the following:</p>
							<ul className='form-instructions'>
								<li>Image Link, such as from Unsplash or Imgur</li>
								<li>Image Author, we encourage attribution for all images</li>
								<li>
									Image License, as in{" "}
									<a href='//creativecommons.org/about/cclicenses/'>
										Creative Commons licenses
									</a>
								</li>
							</ul>
							<button type='button' onClick={() => setShowImageSection(true)}>
								Add Image
							</button>
						</>
					)}
				</section>

				<section className='form-section'>
					<h2 className='form-subtitle'>Ingredients</h2>
					{ingredients.map((_, i) => {
						return (
							<div className='list-inputs' key={i}>
								<Form.Group>
									<Row>
										<Col>
											<Form.Label htmlFor=''>Quantity</Form.Label>

											<Form.Control
												type='text'
												name='quantity'
												size='lg'
												onChange={(e) => updateList(e, i)}
											/>
										</Col>
										<Col>
											<Form.Label htmlFor=''>Ingredient</Form.Label>

											<Form.Control
												type='text'
												name='ingredient'
												size='lg'
												onChange={(e) => updateList(e, i)}
												required
											/>
										</Col>
									</Row>
								</Form.Group>
							</div>
						);
					})}

					<button onClick={addMoreIngredients}>Add More Ingredients</button>
					<Form.Group>
						<Form.Label htmlFor='garnish'>
							Garnish <span className='form-optional-tag'>- optional</span>
						</Form.Label>
						<Row>
							<Col>
								<Form.Control
									type='text'
									name='garnish'
									size='lg'
									onChange={updateData}
								/>
							</Col>
							<Col></Col>
						</Row>
					</Form.Group>
				</section>
				<section className='form-section'>
					<h2 className='form-subtitle'>Instructions</h2>
					{steps.map((_, i) => {
						return (
							<div className='list-inputs' key={i}>
								<Form.Group>
									<Form.Label htmlFor=''>Step {1 + i}</Form.Label>
									<Form.Control
										type='text'
										name='step'
										size='lg'
										onChange={(e) => updateList(e, i)}
										required
									/>
								</Form.Group>
							</div>
						);
					})}
					<button onClick={addMoreSteps}>Add More Steps</button>
				</section>
				<button type='submit'>
					{isSending ? (
						<>
							<Spinner
								animation='border'
								size='sm'
								role='status'
								aria-describedby='postingStatus'
							></Spinner>{" "}
							<span id='postingStatus'>Posting Recipe...</span>
						</>
					) : (
						"Post Recipe"
					)}
				</button>
			</Form>
		</div>
	);
};

export default AddRecipe;
