import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Styles/Search.scss';

interface SearchProps {
  onInputChange: () => void; // Add an onInputChange prop
  handleInputClick: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  onSearch: (query: string) => void; // Add an onSearch prop to handle search
}

const Search: React.FC<SearchProps> = ({ onInputChange, handleInputClick, inputRef, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onInputChange(); // Call the onInputChange prop when the input changes
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); // Call the onSearch prop to perform a search
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
        <button onClick={handleSearchClick}>
          <FaSearch />
        </button>
      </div>
    </>
  );
};

export default Search;

