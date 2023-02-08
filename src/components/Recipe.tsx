import * as React from 'react'
import RecipeFigure from './Recipe/RecipeFigure';
import RecipeDetails from './Recipe/RecipeDetails';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeDirections from './Recipe/RecipeDirections';
import { DisplayRecipe } from '../types';
import { useAppSelector } from '../store/hooks';

interface RecipeProps {
}

const Recipe: React.FC<RecipeProps> = () => {
  const displayRecipe = useAppSelector(state => state.recipe.rec)
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