import * as React from 'react';
import { useState } from 'react';
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
  const [displayRecipe, setDisplayRecipe] = useState('')
  // const timeout = function (s) {
  //   return new Promise(function (_, reject) {
  //     setTimeout(function () {
  //       reject(new Error(`Request took too long! Timeout after ${s} second`));
  //     }, s * 1000);
  //   });
  // };
  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
      );
      // const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`${data.message} (${res.status})`);
      }
      // console.log(res, data);

      let { recipe } = data.data;

      // console.log(recipe);

      recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.sourceUrl,
        image: recipe.image,
        servings: recipe.servings,
        cookingTime: recipe.cookingTime,
        ingredients: recipe.ingredients,
      };

      setDisplayRecipe(recipe)
    } catch (err) {
      alert(err);
    }
  }


  return (
    <div className="container">
      <Header />
      <SearchResults fetchRecipe={fetchRecipe} displayRecipe={displayRecipe} />
      {displayRecipe ? <Recipe displayRecipe={displayRecipe} /> : <RecipePlaceholder />}
      <Copyright />
      <PaginationButtons />
      <Modal />
    </div>
  )
}

export default App;