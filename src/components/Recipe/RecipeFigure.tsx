import * as React from 'react';
import { useState } from 'react';
import Spinner from '../Spinner';

// interface RecipeFigureProps {

// }

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
}

const RecipeFigure: FunctionComponent<RecipeFigureProps> = ({ displayRecipe }) => {
    const [loading, setLoading] = useState(true);
    const hanleLoadedImage = () => {
        setLoading(false)
        console.log('Image loaded')
    }
    return (
        <figure className="recipe__fig">
            <Spinner loading={loading} />
            <img
                src={displayRecipe.image}
                alt={displayRecipe.title}
                className="recipe__img"
                onLoad={hanleLoadedImage}
            />
            <h1 className="recipe__title">
                <span>{displayRecipe.title}</span>
            </h1>
        </figure>
    );
}

export default RecipeFigure;