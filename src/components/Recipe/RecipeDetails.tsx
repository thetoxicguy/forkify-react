import * as React from 'react';
import Icons from '../../img/icons.svg';

// interface RecipeDetailsProps {

// }

const RecipeDetails: FunctionComponent<RecipeDetailsProps> = ({ displayRecipe }) => {
    return (
        <div className="recipe__details">
            <div className="recipe__info">
                <svg className="recipe__info-icon">
                    <use href={`${Icons}#icon-clock`}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--minutes">
                    {displayRecipe.cookingTime ? displayRecipe.cookingTime : 'unknown amount of'}
                </span>
                <span className="recipe__info-text">minutes</span>
            </div>
            <div className="recipe__info">
                <svg className="recipe__info-icon">
                    <use href={`${Icons}#icon-users`}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--people">{displayRecipe.servings}</span>
                <span className="recipe__info-text">servings</span>

                <div className="recipe__info-buttons">
                    <button className="btn--tiny btn--increase-servings">
                        <svg>
                            <use href={`${Icons}#icon-minus-circle`}></use>
                        </svg>
                    </button>
                    <button className="btn--tiny btn--increase-servings">
                        <svg>
                            <use href={`${Icons}#icon-plus-circle`}></use>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="recipe__user-generated">
                <svg>
                    <use href={`${Icons}#icon-user`}></use>
                </svg>
            </div>
            <button className="btn--round">
                <svg className="">
                    <use href={`${Icons}#icon-bookmark-fill`}></use>
                </svg>
            </button>
        </div>
    );
}

export default RecipeDetails;