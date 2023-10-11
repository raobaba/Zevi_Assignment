import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Styles/Search.scss';

interface SearchProps {
  handleInputClick: () => void;
}

const Search: React.FC<SearchProps> = ({ handleInputClick }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleInputClick}
        />
        <button>
          <FaSearch />
        </button>
      </div>
    </>
  );
};

export default Search;
