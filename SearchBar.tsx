import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="🔍 Search..."
      className="search-bar bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-none p-2 rounded-full transition-width duration-300 focus:outline-none"
    />
  );
};

export default SearchBar;