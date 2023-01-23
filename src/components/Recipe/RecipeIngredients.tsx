import React from 'react'
import Icons from '../../img/icons.svg'

// interface RecipeIngredientsProps {

// }

const RecipeIngredients: FunctionComponent<RecipeIngredientsProps> = ({ displayRecipe }) => {
    return (
        <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <ul className="recipe__ingredient-list">
                {displayRecipe.ingredients.map(
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