import React from 'react';
import Favicon from '../../img/favicon.png';
import Icons from '../../img/icons.svg';

// interface ItemProps {
//   id: string
// }

const Item: FunctionComponent<ItemProps> = ({ recipe }) => {
  // console.log(recipe)
  return (
    <div>
      <a
        className="preview__link preview__link--active"
        href="#23456"
      >
        <figure className="preview__fig">
          <img src={Favicon} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{recipe.title}</h4>
          <p className="preview__publisher">{recipe.publisher}</p>
          <div className="preview__user-generated">
            <svg>
              <use href={`${Icons}#icon-user`}></use>
            </svg>
          </div>
        </div>
      </a >
    </div >
  );
}

export default Item;