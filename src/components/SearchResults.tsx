import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useEffect } from 'react';
import Item from './SearchResults/Item';
import Recipe from './Recipe';
import type { SearchArray } from '../types';

type FetchFunction = (a: string) => void

interface SearchResultsProps {
  fetchRecipe: FetchFunction,
  getRecipes: FetchFunction,
  searchArr: SearchArray
}

const SearchResults: React.FC<SearchResultsProps> = ({
  fetchRecipe,
  getRecipes,
  // searchArr
}) => {
  const searchArr = useAppSelector(state => state.searchArray.list)
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(searchArr)
  }, [ searchArr ])

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