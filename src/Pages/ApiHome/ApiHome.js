import React from "react";

const ApiHome = () => {
  return (
    <div className="container api">
      <section>
        <h1>
          <span class="visually-hidden">TheCocktailAPI: </span>A RESTful API for
          Cocktail Recipes
        </h1>
        <p>
          Find IBA official cocktail recipes and recipes contributed on{" "}
          <a href="/">TheCocktailApp</a>. This is mostly a consumption-only API
          — only the HTTP GET method is available here. If you want to{" "}
          <a href="/recipes/new">add your recipe</a>, you're welcome to do so
          via TheCocktailApp.
        </p>
        <p>
          Note that this API is no longer hosted. The data you see is coming
          from JSON files. You can read more about it on the{" "}
          <a href="/api/about">API's about page</a>.
        </p>
      </section>
      <section>
        <h2>API endpoints</h2>
        <p>
          Below are described the REST endpoints available that you can use to
          search for recipes. No authentication is required to access this API,
          and all resources are fully open and available.
        </p>
        <ul class="list-endpoints">
          <li>
            <h3>List of All Recipes</h3>
            <p>
              Get a list of all recipes available:{" "}
              <span class="api-link">
                /recipes
              </span>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>The recipe identifier.</td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>The recipe name.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>image</td>
                  <td>
                    The link to the recipe image. If a contributed recipe does
                    not have an image, there is a placeholder image from
                    Unsplash.
                  </td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>ingredients</td>
                  <td>A comma-separated list of ingredients.</td>
                  <td>string</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <h3>List of IBA Cocktails</h3>
            <p>
              Get a list of IBA Cocktail recipes only:{" "}
              <span class="api-link">
                /recipes/iba
              </span>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>The recipe identifier.</td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>The recipe name.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>image</td>
                  <td>The link to the recipe image.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>ingredients</td>
                  <td>A comma-separated list of ingredients.</td>
                  <td>string</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <h3>Recipe by id</h3>
            <p>
              Search recipe by id:{" "}
              <span class="api-link">
                /recipes/{'{id}'}
              </span>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>The recipe identifier.</td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>The recipe name.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>image</td>
                  <td>An object containing the image details</td>
                  <td>object</td>
                </tr>
                <tr>
                  <td>image.url</td>
                  <td>The link to the recipe image.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>image.source</td>
                  <td>The link to the image source, e.g.: unsplash.com.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>image.author</td>
                  <td>The image author's name.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>image.license</td>
                  <td>The license under which the image is distributed.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>recipeCategory</td>
                  <td>
                    The IBA cocktails category (The unforgettables, Contemporary
                    classics, New era drinks) or "other cocktails".
                  </td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>description</td>
                  <td>A brief description of the recipe.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>recipeIngredient</td>
                  <td>And array of objects containing ingredient details.</td>
                  <td>list</td>
                </tr>
                <tr>
                  <td>recipeIngredient.id</td>
                  <td>
                    The ingredient identifier within this ingredient list.
                  </td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>recipeIngredient.ingredient</td>
                  <td>The ingredient name.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>recipeIngredient.quantity</td>
                  <td>The quantity and unit of measurement.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>recipeGarnish</td>
                  <td>A comma-seperated list of garnish.</td>
                  <td>string</td>
                </tr>
                <tr>
                  <td>recipeInstructions</td>
                  <td>And array of objects containing instruction details.</td>
                  <td>list</td>
                </tr>
                <tr>
                  <td>recipeInstructions.id</td>
                  <td>The instruction identifier.</td>
                  <td>integer</td>
                </tr>
                <tr>
                  <td>recipeInstructions.step</td>
                  <td>The description of what to do.</td>
                  <td>string</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ApiHome;
