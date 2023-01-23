import React from 'react'
import RecipeFigure from './Recipe/RecipeFigure';
import RecipeDetails from './Recipe/RecipeDetails';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeDirections from './Recipe/RecipeDirections';

// interface RecipeProps {
// }

const Recipe = ({ displayRecipe }) => {
  return (
    <div>
      <RecipeFigure displayRecipe={displayRecipe} />
      <RecipeDetails displayRecipe={displayRecipe} />
      <RecipeIngredients displayRecipe={displayRecipe} />
      <RecipeDirections displayRecipe={displayRecipe} />

    </div >
  );
}

export default Recipe;