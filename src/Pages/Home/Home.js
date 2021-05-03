import React from "react";

const Home = ({ search, pickRandomRecipe }) => {
	return (
		<div className='container home'>
			<form onSubmit={search}>
				<h1>
					<label htmlFor='homeSearchBar'>What would you like to drink?</label>
				</h1>
				<input type='text' className='search-bar' id='homeSearchBar' />
				<div className='buttons'>
					<button type='submit'>Search Recipe</button>
					<button type='button' onClick={pickRandomRecipe}>
						I'm Feeling Bold!
					</button>
				</div>
			</form>
		</div>
	);
};

export default Home;
