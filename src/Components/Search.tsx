import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Styles/Search.scss';

interface SearchProps {
  handleInputClick: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Search: React.FC<SearchProps> = ({ handleInputClick, inputRef }) => {
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
          ref={inputRef}
        />
        <button>
          <FaSearch />
        </button>
      </div>
    </>
  );
};

export default Search;
