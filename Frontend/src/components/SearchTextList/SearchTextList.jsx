import React from 'react';
import "./SearchTextList.css"

function SearchTextList({ searchTexts, onSearchTextClick }) {
  return (
    <div>
      <h2>All Searched Products</h2>
      <ul>
        {searchTexts.map((searchText, index) => (
          <li key={index} onClick={() => onSearchTextClick(searchText)}>
            <button>{decodeURI(searchText)}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchTextList;
