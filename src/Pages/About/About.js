import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div className='container about'>
				<h1>About TheCocktailApp</h1>
				<p>
					TheCocktailApp is the product of a project I did for my React JS
					classes at Business College Helsinki as part of the{" "}
					<a href='https://en.bc.fi/qualifications/full-stack-web-developer-program/'>
						Full Stack Web Developer Program
					</a>
					.
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
					website. The API connects to JSON files which store my data. You can
					check out the <a href='/'>API page here</a> and/or{" "}
					<a href='/'>the repo on my github</a>. The data I used is based on IBA
					official cocktails.
				</p>
			</div>
		);
	}
}

export default About;
