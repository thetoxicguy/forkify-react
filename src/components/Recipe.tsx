import React from 'react'
import RecipeFigure from './Recipe/RecipeFigure';
import RecipeDetails from './Recipe/RecipeDetails';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeDirections from './Recipe/RecipeDirections';

// interface RecipeProps {
// }

const Recipe = (displayRecipe) => {
  return (
    <div>
      {/* <div className="spinner">
    <svg>
      <use href="src/img/icons.svg#icon-loader"></use>
    </svg>
  </div> */}

      {/* <div className="error">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div> */}

      <RecipeFigure />
      <RecipeDetails />
      <RecipeIngredients />
      <RecipeDirections />

    </div >
  );
}

export default Recipe;