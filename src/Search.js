import React from 'react';

const Search = ({ onSearch }) => (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={onSearch} />
    </div>
);

export default Search;