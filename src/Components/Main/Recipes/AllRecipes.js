import React from "react";

const AllRecipes = ({ Unforgettables, Classics, New }) => {
	return (
		<div className='recipes-container'>
			<h2>The Unforgettables</h2>
			<div className='recipe-scroll-wrapper'>{Unforgettables}</div>
			<h2>Contemporary Classics</h2>
			<div className='recipe-scroll-wrapper'>{Classics}</div>
			<h2>New Era Drinks</h2>
			<div className='recipe-scroll-wrapper'>{New}</div>
		</div>
	);
};

export default AllRecipes;
