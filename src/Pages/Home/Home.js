import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<div className='container home'>
				<form>
					<h1>
						<label htmlFor='homeSearchBar'>What would you like to drink?</label>
					</h1>
					<input type='text' className='search-bar' id='homeSearchBar' />
					<div className='buttons'>
						<button type='submit'>Search Recipe</button>
						<button type='submit'>I'm Feeling Bold!</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Home;
