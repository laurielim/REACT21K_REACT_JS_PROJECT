import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div className='container about'>
				<h1>About TheCocktailApp</h1>
				<p>
					TheCocktailApp is the result of the course project I did for{" "}
					<a href='//github.com/laurielim/REACT21K_REACT_JS'>
						my React JS classes
					</a>{" "}
					as part of the{" "}
					<a href='//en.bc.fi/qualifications/full-stack-web-developer-program/'>
						Full Stack Web Developer Program
					</a>{" "}
					at Business College Helsinki. This is a full stack project. The
					front-end is{" "}
					<a href='//github.com/laurielim/REACT21K_REACT_JS_PROJECT'>
						built with React
					</a>{" "}
					and the backend is{" "}
					<a href='//github.com/laurielim/REACT21K_PHP_PROJECT'>
						built with Symfony
					</a>
					.
				</p>
				<p>
					The initial idea was to make a website for cooking recipes. However I
					wanted to make use of{" "}
					<a href='//www.thecocktaildb.com/'>TheCocktailDB</a> which is an open,
					crowd-sourced database of drinks and cocktails from around the world.
					Based on this, I desgined{" "}
					<a href='//www.figma.com/file/qVjZ8IDxZnayehZwQBCsev/TheCocktailApp?node-id=0%3A1'>
						the app on Figma
					</a>
					. As I was developing the website, the project requirements evolved
					and we were tasked with creating our own API.
				</p>
				<p>
					Since I was learning PHP in parallel, I created a RESTful API for my
					website. You can check out the{" "}
					<a href='/api'>
						API page here
					</a>
					. IBA official cocktails are stored in JSON files while contributed
					recipes are stored in an SQL database. Read more about this project on{" "}
					<a href='//laurielim.github.io/portfolio/theCocktailApp/'>
						my portfolio website
					</a>
					.
				</p>
			</div>
		);
	}
}

export default About;
