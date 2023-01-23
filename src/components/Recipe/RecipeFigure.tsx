import * as React from 'react';

// interface RecipeFigureProps {

// }

const RecipeFigure: FunctionComponent<RecipeFigureProps> = ({ displayRecipe }) => {
    return (
        <figure className="recipe__fig">
            <img src={displayRecipe.image} alt={displayRecipe.title} className="recipe__img" />
            <h1 className="recipe__title">
                <span>{displayRecipe.title}</span>
            </h1>
        </figure>
    );
}

export default RecipeFigure;