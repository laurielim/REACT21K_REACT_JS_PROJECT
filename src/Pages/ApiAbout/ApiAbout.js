import React from "react";

const ApiAbout = () => {
  return (
    <div className="container api-about">
      <h1>About TheCocktailAPI</h1>
      <p>
        TheCocktailAPI is the result of the course project I did for{" "}
        <a href="//github.com/laurielim/REACT21K_REACT_JS">
          my React JS classes
        </a>
        , and draws from{" "}
        <a href="//github.com/laurielim/REACT21K_PHP">my PHP classes</a> which
        is all part of the{" "}
        <a href="//en.bc.fi/qualifications/full-stack-web-developer-program/">
          Full Stack Web Developer Program
        </a>{" "}
        at Business College Helsinki. This is a full stack project. The
        front-end is{" "}
        <a href="//github.com/laurielim/REACT21K_REACT_JS_PROJECT">
          built with React
        </a>{" "}
        and the backend is{" "}
        <a href="//github.com/laurielim/REACT21K_PHP_PROJECT">
          built with Symfony
        </a>
        .
      </p>
      <p>
        The initial idea was to make a website for cooking recipes. However I
        wanted to make use of{" "}
        <a href="//www.thecocktaildb.com/">TheCocktailDB</a> which is an open,
        crowd-sourced database of drinks and cocktails from around the world.
        Based on this, I designed{" "}
        <a href="//www.figma.com/file/qVjZ8IDxZnayehZwQBCsev/TheCocktailApp?node-id=0%3A1">
          the app on Figma
        </a>
        . As I was developing the website, the project requirements evolved and
        we were tasked with creating our own backend and API.
      </p>
      <p>
        Hence this project was created. I've drawn inspiration from the{" "}
        <a href="//pokeapi.co/">PokéAPI</a> which I have used before to make a{" "}
        <a href="//codepen.io/laurielim/pen/PoWVmgV">Pokedex on codepen</a>. I
        chose to limit the initial recipes to the{" "}
        <a href="//en.wikipedia.org/wiki/List_of_IBA_official_cocktails">
          list of IBA official cocktails
        </a>{" "}
        for the sake of simplicity.
      </p>
      <p>
        A lot of pictures are from <a href="//unsplash.com/">Unsplash</a> where
        I started looking. I used a lot of pictures from{" "}
        <a href="//unsplash.com/@cocktailbart">Johann Trasch</a> whom I
        eventually messaged. He kindly gave me permission to use his pictures
        from his own website about cocktails,
        <a href="//cocktailbart.de/">cocktailbart.de</a>. Check it out, it's
        great! Even if you don't speak German, google chrome neatly translates
        the website.
      </p>
      <p>
        This page alongside the API used to be hosted on Heroku, until the free
        plan was no longer available. Nonetheless, I wanted to preserve and
        showcase the work I did. I moved the API pages to the front end
        application and the data to json files. The repo was left intact and is
        still available on{" "}
        <a href="//github.com/laurielim/REACT21K_PHP_PROJECT">my github</a>.
      </p>
      <p>
        Please checkout <a href="/">TheCocktailApp</a> and read more about the
        whole project on{" "}
        <a href="//laurielim.github.io/portfolio/thecocktailapp/">
          my portfolio website
        </a>
        . Feel free to contact me{" "}
        <a href="//twitter.com/intent/tweet?screen_name=laurielimsam">
          @laurielimsam on Twitter
        </a>{" "}
        for any feedback.
      </p>
    </div>
  );
};

export default ApiAbout;
