import * as React from 'react';
import { DisplayRecipe } from '../../types';

interface RecipeDirectionsProps {
    displayRecipe: DisplayRecipe
}

const RecipeDirections: React.FC<RecipeDirectionsProps> = ({ displayRecipe }) => {
    return (
        <div className="recipe__directions">
            <h2 className="heading--2">How to cook it</h2>
            <p className="recipe__directions-text">
                This recipe was carefully designed and tested by { ' ' }
                <span className="recipe__publisher">{
                    typeof displayRecipe === 'string' ? 'Unknown' : displayRecipe.publisher
                }</span>. Please check out
                directions at their website.
            </p>
            <a
                className="btn--small recipe__btn"
                href={
                    typeof displayRecipe === 'string' ? '' : displayRecipe.sourceUrl
                }
                target="_blank"
            >
                <span>Directions</span>
                <svg className="search__icon">
                    <use href="src/img/icons.svg#icon-arrow-right"></use>
                </svg>
            </a>
        </div>
    );
}

export default RecipeDirections;