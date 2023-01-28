import * as React from 'react';
import { useState } from 'react';

import Logo from '../img/logo.png';
import Icons from '../img/icons.svg';

interface HeaderProps {
  fetchQuery: (a: string) => void
}

const Header: React.FC<HeaderProps> = ({ fetchQuery }) => {
  const [searchText, setSearchText] = useState('')
  const handleChange = e => {
    setSearchText(e.target.value)
  }
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <form className="search">
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
          onChange={handleChange}
          value={searchText}
        />
        <button className="btn search__btn" onClick={() => fetchQuery(searchText)}>
          <svg className="search__icon">
            <use href={`${Icons}#icon-search`}></use>
          </svg>
          <span>Search</span>
        </button>
      </form>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
              <svg className="nav__icon">
                <use href={`${Icons}#icon-edit`}></use>
              </svg>
              <span>Add recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
              <svg className="nav__icon">
                <use href={`${Icons}#icon-bookmark`}></use>
              </svg>
              <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
              <ul className="bookmarks__list">
                <div className="message">
                  <div>
                    <svg>
                      <use href={`${Icons}#icon-smile`}></use>
                    </svg>
                  </div>
                  <p>
                    No bookmarks yet. Find a nice recipe and bookmark it :)
                  </p>
                </div>

                {/* <li className="preview">
              <a className="preview__link" href="#23456">
                <figure className="preview__fig">
                  <img src="src/img/test-1.jpg" alt="Test" />
                </figure>
                <div className="preview__data">
                  <h4 className="preview__name">
                    Pasta with Tomato Cream ...
                  </h4>
                  <p className="preview__publisher">The Pioneer Woman</p>
                </div>
              </a>
            </li> */}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;