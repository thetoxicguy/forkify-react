import * as React from 'react'
import RecipeFigure from './Recipe/RecipeFigure';
import RecipeDetails from './Recipe/RecipeDetails';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeDirections from './Recipe/RecipeDirections';

type DisplayRecipe =
  | ''
  | {
    id: string,
    title: string,
    publisher: string,
    sourceUrl: string,
    image: string,
    servings: string,
    cookingTime: string,
    ingredients: [
      {
        quantity: number,
        unit: string,
        description: string,
      }
    ],
  }

interface RecipeProps {
  displayRecipe: DisplayRecipe
}

const Recipe: React.FC<RecipeProps> = ({ displayRecipe }) => {
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