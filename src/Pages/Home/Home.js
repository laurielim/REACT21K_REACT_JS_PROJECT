import React, { useState } from "react";
import Landing from "../../Components/Main/Home/Landing";
import RecipeSearchResult from "../../Components/Main/Recipes/RecipeSearchResult";

const Home = () => {
	const [searchInput, setSearchInput] = useState();
	if (!searchInput) {
		return <Landing />;
	}
};

export default Home;
