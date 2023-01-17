import * as React from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Recipe from './components/Recipe';
import PaginationButtons from './components/PaginationButtons';
import Copyright from './components/Copyright';
import Modal from './components/Modal';


interface Props {
  name: string
}

const App = ({ name }) => {

  // const timeout = function (s) {
  //   return new Promise(function (_, reject) {
  //     setTimeout(function () {
  //       reject(new Error(`Request took too long! Timeout after ${s} second`));
  //     }, s * 1000);
  //   });
  // };

  return (
    <div className="container">
      <Header />
      <SearchResults />
      <Recipe />
      <Copyright />
      <PaginationButtons />
      <Modal />
    </div>
  )
}

export default App;