import * as React from 'react';
import { useGetRecipesListQuery, useGetRecipeQuery } from './services/forkify';
import { FC, useEffect, useState } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import PaginationButtons from './components/PaginationButtons';
import RecipePlaceholder from './components/RecipePlaceholder';
import Recipe from './components/Recipe';
import Copyright from './components/Copyright';
import Modal from './components/Modal';

import { SearchArray } from './types';


interface AppProps {
  name: string
}

type FetchFunction = (a: string) => void
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

const App: FC<AppProps> = () => {
  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetRecipesListQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = searchApi.endpoints.getRecipesList.useQuery('bulbasaur')

  const [ name, setName ] = useState('Daniel')
  const [ loading, setLoading ] = useState(true);
  // const [color, setColor] = useState('#ffffff') // I think this was used for the Spinner initial example
  const [ displayRecipe, setDisplayRecipe ] = useState<DisplayRecipe>('');
  const [ searchArr, setSearchArr ] = useState<SearchArray>(
    [ {
      publisher: '',
      image: '',
      title: '',
      id: '',
    } ]
  );

  useEffect(() => { console.log(`${ searchArr.length } recipes`) }, [ searchArr ])

  const getRecipes = async (searchText: string) => {
    await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${ searchText }`)
      .then(res => res.json())
      .then(data => setSearchArr(data.data.recipes))
      .catch(err => { throw new Error(err) })
  }

  const fetchRecipe: FetchFunction = async (id) => {
    // 5ed6604591c37cdc054bc886
    await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${ id }`)
      .then(res => res.json())
      .then(data =>
        setDisplayRecipe({
          id: data.data.recipe.id,
          title: data.data.recipe.title,
          publisher: data.data.recipe.publisher,
          sourceUrl: data.data.recipe.sourceUrl,
          image: data.data.recipe.image_url,
          servings: data.data.recipe.servings,
          cookingTime: data.data.recipe.cookingTime,
          ingredients: data.data.recipe.ingredients,
        })
      )
      .catch(err => { throw new Error(err) })
  }

  return (
    <div className="container">
      <Header getRecipes={ getRecipes } />
      <SearchResults fetchRecipe={ fetchRecipe } searchArr={ searchArr } />
      { displayRecipe ?
        <Recipe displayRecipe={ displayRecipe } /> :
        <RecipePlaceholder name={ name } /> }
      <Copyright />
      <PaginationButtons />
      <Modal />
    </div>
  )
}

export default App;