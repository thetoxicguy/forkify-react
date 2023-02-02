import * as React from 'react';
import axios from 'axios'
import { useAppSelector, useAppDispatch } from './store/hooks';
// import { useGetRecipesListQuery, useGetRecipeQuery } from './services/forkify';
import { FC, useEffect, useState } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import PaginationButtons from './components/PaginationButtons';
import RecipePlaceholder from './components/RecipePlaceholder';
import Recipe from './components/Recipe';
import Copyright from './components/Copyright';
import Modal from './components/Modal';

import { SearchArray } from './types';
import { updateRecipes } from './store/search/searchArraySlice';
import { updateDisplayRecipe } from './store/recipe/recipeSlice';
import { DisplayRecipe } from './types';

interface AppProps {
  name: string
}

type FetchFunction = (a: string) => void

const App: FC<AppProps> = () => {
  const searchArr = useAppSelector(state => state.searchArray.list)
  const displayRecipe = useAppSelector(state => state.recipe.rec)
  const dispatch = useAppDispatch()

  const [ name, setName ] = useState('Daniel')

  useEffect(() => { console.log(`${ searchArr.length } recipes`) }, [ searchArr ])

  const getRecipes = async (searchText: string) => {
    await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${ searchText }`)
      .then(res => dispatch(updateRecipes(res.data.data.recipes)))
      .catch(err => { throw new Error(err) })
  }

  const fetchRecipe: FetchFunction = async (id) => {
    await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${ id }`)
      // .then(res => res.json())
      .then(res =>
        dispatch(updateDisplayRecipe({
          id: res.data.data.recipe.id,
          title: res.data.data.recipe.title,
          publisher: res.data.data.recipe.publisher,
          sourceUrl: res.data.data.recipe.sourceUrl,
          image: res.data.data.recipe.image_url,
          servings: res.data.data.recipe.servings,
          cookingTime: res.data.data.recipe.cookingTime,
          ingredients: res.data.data.recipe.ingredients,
        }))
      )
      .catch(err => { throw new Error(err) })
  }

  return (
    <div className="container">
      <Header getRecipes={ getRecipes } />
      <SearchResults fetchRecipe={ fetchRecipe } searchArr={ searchArr } />
      { displayRecipe.id === '' ? <RecipePlaceholder name={ name } /> : <Recipe /> }
      <Copyright />
      <PaginationButtons />
      <Modal />
    </div>
  )
}

export default App;