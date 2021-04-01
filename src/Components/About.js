import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>About TheCocktailApp</h1>
        <p>
          TheCocktailApp is the product of a course project I did for my React
          JS classes at Business College Helsinki as part of the Full Stack Web
          Developer Program.
        </p>
        <p>
          The initial idea was to make a blog/homepage for cooking and recipes.
          However I wanted to make use of the{" "}
          <a href="https://www.thecocktaildb.com/">TheCocktailDB</a> which is an
          open, crowd-sourced database of drinks and cocktails from around the
          world.
        </p>
      </div>
    );
  }
}

export default About;
