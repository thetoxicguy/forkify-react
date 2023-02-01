import * as React from 'react';
import { useEffect, useState } from 'react';
import Item from './SearchResults/Item';
import Recipe from './Recipe';
import type { SearchArray } from '../types';

type FetchFunction = (a: string) => void

interface SearchResultsProps {
  fetchRecipe: FetchFunction
  searchArr: SearchArray
}

const SearchResults: React.FC<SearchResultsProps> = ({ fetchRecipe, searchArr }) => {
  // const [displayRecipe, setDisplayRecipe] = useState('')
  // useEffect(() => {
  //   console.log(displayRecipe)
  // },
  //   [displayRecipe])

  return (
    <div className="search-results">
      {
        searchArr[ 0 ].id ?
          <ul className="results">
            {
              searchArr.map((recipe, i) =>
                <li key={ i } className="preview" onClick={ () => fetchRecipe(recipe.id) }>
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