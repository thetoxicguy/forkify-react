import * as React from 'react';
import axios from 'axios'
import { useAppDispatch } from './store/hooks';
import { updateRecipes } from './store/search/searchArraySlice';
import { updateDisplayRecipe } from './store/recipe/recipeSlice';

import { FC, useEffect, useState } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import PaginationButtons from './components/PaginationButtons';
import RecipePlaceholder from './components/RecipePlaceholder';
import Recipe from './components/Recipe';
import Copyright from './components/Copyright';
import Modal from './components/Modal';

import { FetchFunction } from './types';
import { useAppSelector } from './store/hooks';

interface AppProps {
  name: string
}

const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch()
  const displayRecipe = useAppSelector(state => state.recipe)

  const [ name, setName ] = useState('Daniel')
  const [ loading, setLoading ] = useState(true);
  // useEffect(() => { console.log(`${ searchArr.length } recipes`) }, [ searchArr ])

  const getRecipes: FetchFunction = async (searchText: string) => {
    await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${ searchText }`)
      .then(res => dispatch(updateRecipes(res.data.data.recipes)))
      .catch(err => { throw new Error(err) })
  }

  const fetchRecipe: FetchFunction = async (id) => {
    await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${ id }`)
      .then(res =>
        dispatch(updateDisplayRecipe(
          {
            id: res.data.data.recipe.id,
            title: res.data.data.recipe.title,
            publisher: res.data.data.recipe.publisher,
            sourceUrl: res.data.data.recipe.sourceUrl,
            image: res.data.data.recipe.image_url,
            servings: res.data.data.recipe.servings,
            cookingTime: res.data.data.recipe.cookingTime,
            ingredients: res.data.data.recipe.ingredients,
          }
        ))
      )
      .catch(err => { throw new Error(err) })
  }

  return (
    <div className="container">
      <Header getRecipes={ getRecipes } />
      <SearchResults fetchRecipe={ fetchRecipe } />
      { displayRecipe.rec.id !== '' ?
        <Recipe /> :
        <RecipePlaceholder name={ name } /> }
      <Copyright />
      <PaginationButtons />
      <Modal />
    </div>
  )
}

export default App;