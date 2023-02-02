import * as React from 'react';
import { FC } from 'react';
import Icons from '../../img/icons.svg';

type Ingredients = [
    {
        quantity: number,
        unit: string,
        description: string,
    }
]

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
        ingredients: Ingredients
    }

interface RecipeIngredientsProps {
    displayRecipe: DisplayRecipe
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ displayRecipe }) => {
    return (
        <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <ul className="recipe__ingredient-list">
                {typeof displayRecipe === 'string' ? '' :
                    displayRecipe.ingredients.map(
                        (ingredient, i: number) =>
                            <li key={i} className="recipe__ingredient">
                                <svg className="recipe__icon">
                                    <use href={`${Icons}#icon-check`}></use>
                                </svg>
                                <div className="recipe__quantity">{ingredient.quantity}</div>
                                <div className="recipe__description">
                                    <span className="recipe__unit">{ingredient.unit}</span>
                                    {ingredient.description}
                                </div>
                            </li>
                    )}
            </ul>
        </div>
    );
}

export default RecipeIngredients;