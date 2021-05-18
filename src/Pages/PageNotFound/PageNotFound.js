import React from "react";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
	let history = useHistory();
	return (
		<div className='container no-page flex-content'>
			<div className='404-page-content'>
				<h1>Page Not Found</h1>
				<p>
					Uh oh! Error 404. The page you requested could not be found. In case
					you've had too many cocktails, here's a glass of milk!
				</p>
				<button
					onClick={() =>
						history.length > 1 ? history.goBack() : history.push("/recipes")
					}
				>
					Go Back
				</button>
			</div>
			<div className='404-page-img'>
				<p className='no-cocktails'>🥛</p>
			</div>
		</div>
	);
};

export default PageNotFound;
