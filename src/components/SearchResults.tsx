import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import Item from './SearchResults/Item';
import Recipe from './Recipe';
import type { SearchArray, FetchFunction } from '../types';
import { updateDisplayRecipe } from '../store/recipe/recipeSlice';

interface SearchResultsProps {
}

const SearchResults: React.FC<SearchResultsProps> = ({ }) => {
  const searchArr = useAppSelector(state => state.searchArray.list)
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(searchArr)
  }, [ searchArr ])

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
    <div className="search-results">
      {
        searchArr[ 0 ].publisher !== 'danrolo' ?
          <ul className="results">
            {
              searchArr.map((recipe, i) =>
                <li key={ i } className="preview" onClick={ () => { fetchRecipe(recipe.id) } }>
                  <Item
                    recipe={ recipe }
                  />
                </li>
              )
            }
          </ul> :
          ''
      }
    </div>
  );
  {/* <div className="error">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div> */}

}

export default SearchResults;