import React from 'react';
import SearchIcon from '../../icons/Search';

import './index.scss';

const Search: React.FC = () => {
  return (
    <div className="search">
      <input type="text" name="search" placeholder="Faça aqui sua busca" />
      <button type="submit">
        <SearchIcon />         
      </button>
    </div>
  );
}

export default Search;