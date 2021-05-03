import React from "react";

const AllRecipes = ({ Unforgettables, Classics, New }) => {
	return (
		<div className='recipes-container'>
			<section>
				<h2>The Unforgettables</h2>
				<div className='recipe-scroll-wrapper'>{Unforgettables}</div>
				<div className='scroll-right flex-content'>
					<p>Scroll Right</p>
					<svg
						version='1.1'
						id='Layer_1'
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						viewBox='0 0 50 50'
						className='svg-icon'
					>
						<g id='Layer_1_1_'>
							<polygon points='1,26 44.586,26 38.293,32.293 39.707,33.707 48.414,25 39.707,16.293 38.293,17.707 44.586,24 1,24 	' />
						</g>
					</svg>
				</div>
			</section>
			<section>
				<h2>Contemporary Classics</h2>
				<div className='recipe-scroll-wrapper'>{Classics}</div>
				<div className='scroll-right flex-content'>
					<p>Scroll Right</p>
					<svg
						version='1.1'
						id='Layer_1'
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						viewBox='0 0 50 50'
						className='svg-icon'
					>
						<g id='Layer_1_1_'>
							<polygon points='1,26 44.586,26 38.293,32.293 39.707,33.707 48.414,25 39.707,16.293 38.293,17.707 44.586,24 1,24 	' />
						</g>
					</svg>
				</div>
			</section>
			<section>
				<h2>New Era Drinks</h2>
				<div className='recipe-scroll-wrapper'>{New}</div>
				<div className='scroll-right flex-content'>
					<p>Scroll Right</p>
					<svg
						version='1.1'
						id='Layer_1'
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						viewBox='0 0 50 50'
						className='svg-icon'
					>
						<g id='Layer_1_1_'>
							<polygon points='1,26 44.586,26 38.293,32.293 39.707,33.707 48.414,25 39.707,16.293 38.293,17.707 44.586,24 1,24 	' />
						</g>
					</svg>
				</div>
			</section>
		</div>
	);
};

export default AllRecipes;
