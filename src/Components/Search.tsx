// src/components/SearchBar.tsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../Styles/Search.scss";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
