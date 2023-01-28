import * as React from 'react';
import Icons from '../../img/icons.svg';

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

interface RecipeDetailsProps {
    displayRecipe: DisplayRecipe
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ displayRecipe }) => {
    return (
        <div className="recipe__details">
            <div className="recipe__info">
                <svg className="recipe__info-icon">
                    <use href={`${Icons}#icon-clock`}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--minutes">
                    {typeof displayRecipe === 'string' ? 'unknown amount of' : displayRecipe.cookingTime}
                </span>
                <span className="recipe__info-text">minutes</span>
            </div>
            <div className="recipe__info">
                <svg className="recipe__info-icon">
                    <use href={`${Icons}#icon-users`}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--people">{
                    typeof displayRecipe === 'string' ? '' : displayRecipe.servings
                }</span>
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