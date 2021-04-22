import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <h1>
            <label htmlFor="search-bar">What would you like to drink?</label>
          </h1>
          <input type="text" id="search-bar" />
          <div className="buttons">
            <button type="submit">Search Recipe</button>
            <button type="submit">I'm Feeling Bold!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
