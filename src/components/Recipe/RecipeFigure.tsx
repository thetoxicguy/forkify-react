import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useState } from 'react';
import Spinner from '../Spinner';
import { DisplayRecipe } from '../../types';
import { toggleLoadingImage } from '../../store/loading/loadingImageSlice';

interface RecipeFigureProps {
    displayRecipe: DisplayRecipe
}

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
}

const RecipeFigure: React.FC<RecipeFigureProps> = ({ displayRecipe }) => {
    const loadingImage = useAppSelector(state => state.loadingImage.value)
    const dispatch = useAppDispatch()
    const hanleLoadedImage = () => {
        dispatch(toggleLoadingImage(false))
    }
    return (
        <figure className="recipe__fig">
            <Spinner loadingImage={ loadingImage } />
            <img
                src={ displayRecipe.id === '' ? '' : displayRecipe.image }
                alt={ displayRecipe.id === '' ? '' : displayRecipe.title }
                className="recipe__img"
                onLoad={ hanleLoadedImage }
            />
            <h1 className="recipe__title">
                <span>{ displayRecipe.id === '' ? '' : displayRecipe.title }</span>
            </h1>
        </figure>
    );
}

export default RecipeFigure;