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
      </ul>
    </div>
  );
}

export default SearchResults;