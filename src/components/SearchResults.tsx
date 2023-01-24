import React, { useEffect, useState } from 'react';
import Item from './SearchResults/Item';
import Recipe from './Recipe';

// interface SearchResultsProps {
// }

const SearchResults: FunctionComponent<SearchResultsProps> = ({ fetchRecipe, displayRecipe }) => {
  // const [displayRecipe, setDisplayRecipe] = useState('')
  useEffect(() => {
    console.log(displayRecipe)
  },
    [displayRecipe])

  return (
    <div className="search-results">
      <ul className="results">
        <li className="preview" onClick={fetchRecipe}>
          <Item
            recipe={displayRecipe}
          />
        </li>
        <li className="preview" onClick={fetchRecipe}>
          <Item
            recipe={displayRecipe}
          />
        </li>
      </ul>
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