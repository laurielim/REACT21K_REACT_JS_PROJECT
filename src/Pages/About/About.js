import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div className='container about'>
				<h1>About TheCocktailApp</h1>
				<p>
					TheCocktailApp is the result of the course project I did for my React
					JS classes at Business College Helsinki as part of the{" "}
					<a href='https://en.bc.fi/qualifications/full-stack-web-developer-program/'>
						Full Stack Web Developer Program
					</a>
					. This is a full stack application, built with React and Symfony.
				</p>
				<p>
					The initial idea was to make a website for cooking recipes. However I
					wanted to make use of{" "}
					<a href='https://www.thecocktaildb.com/'>TheCocktailDB</a> which is an
					open, crowd-sourced database of drinks and cocktails from around the
					world. Based on this, I desgined{" "}
					<a href='https://www.figma.com/file/qVjZ8IDxZnayehZwQBCsev/TheCocktailApp?node-id=0%3A1'>
						the app on Figma
					</a>
					. As I was developing the website, the project requirements evolved
					and we were tasked with creating our own API.
				</p>
				<p>
					Since I was learning PHP in parallel, I created a RESTful API for my
					website. You can check out the{" "}
					<a href='//laurielim-thecocktailapp-api.herokuapp.com'>
						API page here
					</a>{" "}
					and{" "}
					<a href='//github.com/laurielim/REACT21K_PHP_PROJECT'>
						the repo on my github
					</a>
					. The API connects to a database and some JSON files where my data is
					stored. Read more about this project on{" "}
					<a href='//laurielim.github.io/portfolio/thecocktailapp/'>
						my portfolio website
					</a>
					.
				</p>
			</div>
		);
	}
}

export default About;
