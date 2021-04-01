import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img
            src={logo}
            alt="TheCocktailApp logo, a tumbler glass with whiskey and ice, next to website name"
          />
        </NavLink>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
