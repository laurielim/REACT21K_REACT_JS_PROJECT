import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>TheCocktailApp</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
