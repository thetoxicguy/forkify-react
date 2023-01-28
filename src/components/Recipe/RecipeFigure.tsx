import * as React from 'react';
import { useState } from 'react';
import Spinner from '../Spinner';

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

interface RecipeFigureProps {
    displayRecipe: DisplayRecipe
}

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
}

const RecipeFigure: React.FC<RecipeFigureProps> = ({ displayRecipe }) => {
    const [loading, setLoading] = useState(true);
    const hanleLoadedImage = () => {
        setLoading(false)
    }
    return (
        <figure className="recipe__fig">
            <Spinner loading={loading} />
            <img
                src={typeof displayRecipe === 'string' ? '' : displayRecipe.image}
                alt={typeof displayRecipe === 'string' ? '' : displayRecipe.title}
                className="recipe__img"
                onLoad={hanleLoadedImage}
            />
            <h1 className="recipe__title">
                <span>{typeof displayRecipe === 'string' ? '' : displayRecipe.title}</span>
            </h1>
        </figure>
    );
}

export default RecipeFigure;