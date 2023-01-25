import * as React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import PaginationButtons from './components/PaginationButtons';
import RecipePlaceholder from './components/RecipePlaceholder';
import Recipe from './components/Recipe';
import Copyright from './components/Copyright';
import Modal from './components/Modal';


interface Props {
  name: string
}

const App = ({ name }) => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#ffffff')
  const [displayRecipe, setDisplayRecipe] = useState('');
  const [searchArr, setSearchArr] = useState('')
  useEffect(() => { console.log(`${searchArr.length} recipes`) }, [searchArr])

  const fetchQuery = async (searchText) => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchText}`)
      .then(res => res.json())
      .then(data => setSearchArr(data.data.recipes))
      .catch(err => { throw new Error(err) })
  }

  const fetchRecipe = async id => {
    // 5ed6604591c37cdc054bc886
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
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
    // try {
    //   const res = await fetch(
    //     'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    //   );
    //   const data = await res.json();
    //   if (!res.ok) {
    //     throw new Error(`${data.message} (${res.status})`);
    //   }

    //   let { recipe } = data.data;

    //   recipe = {
    //     id: recipe.id,
    //     title: recipe.title,
    //     publisher: recipe.publisher,
    //     sourceUrl: recipe.sourceUrl,
    //     image: recipe.image_url,
    //     servings: recipe.servings,
    //     cookingTime: recipe.cookingTime,
    //     ingredients: recipe.ingredients,
    //   };
    //   setDisplayRecipe(recipe)
    // } catch (err) {
    //   alert(err);
    // }
  }


  return (
    <div className="container">
      <Header fetchQuery={fetchQuery} />
      <SearchResults fetchRecipe={fetchRecipe} searchArr={searchArr} />
      {displayRecipe ?
        <Recipe displayRecipe={displayRecipe} /> :
        <RecipePlaceholder />}
      <Copyright />
      <PaginationButtons />
      <Modal />
    </div>
  )
}

export default App;