import React, { useState, useRef, useEffect } from "react";
import Search from "./Search";
import TrendingProducts from "./TrendingProducts";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import "../Styles/Home.scss";
import { generateFakeFashionItems } from '../Utils/fakeDataGenerator'; // Import your data generation function

function Home() {
  const [clicked, setClicked] = useState(false);
  const [userTyping, setUserTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputClick = () => {
    setClicked(true);
  };

  const handleInputChange = () => {
    setUserTyping(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setClicked(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const searchResults = generateFakeFashionItems(searchQuery); // Generate search results

  return (
    <div className="home-container">
      <div className="search-container">
        <Search
          handleInputClick={handleInputClick}
          inputRef={inputRef}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
        />
      </div>
      <div className="trending-container">
        {!userTyping && <TrendingProducts clicked={clicked} />}
      </div>
      <div className={userTyping ? 'filter-list' : ''}>
        {userTyping ? (
          <div className={userTyping ? 'list-filter' : ''}>
            <ProductFilter
              onSortChange={(ascending: boolean) => {
                // Implement your sorting function
              }}
              onPriceFilterChange={(minPrice: number, maxPrice: number) => {
                // Implement your price filtering function
              }}
              onRatingFilterChange={(rating: number) => {
                // Implement your rating filtering function
              }}
            />
            <ProductList searchResults={searchResults} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
