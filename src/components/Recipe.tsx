import * as React from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks';
import RecipeFigure from './Recipe/RecipeFigure';
import RecipeDetails from './Recipe/RecipeDetails';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeDirections from './Recipe/RecipeDirections';

interface RecipeProps {
}

const Recipe: React.FC<RecipeProps> = () => {
  const displayRecipe = useAppSelector(state => state.recipe.rec)
  console.log(displayRecipe);
  return (
    <div>
      <RecipeFigure displayRecipe={ displayRecipe } />
      <RecipeDetails displayRecipe={ displayRecipe } />
      <RecipeIngredients displayRecipe={ displayRecipe } />
      <RecipeDirections displayRecipe={ displayRecipe } />
    </div >
  );
}

export default Recipe;