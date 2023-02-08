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
  const searchArr = useAppSelector(state => state.searchArray.list)

  const [ name, setName ] = useState('Daniel')
  const [ loading, setLoading ] = useState(true);
  // useEffect(() => { console.log(`${ searchArr.length } recipes`) }, [ searchArr ])

  return (
    <div className="container">
      <Header />
      <SearchResults />
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