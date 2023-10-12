import React, { useState, useRef, useEffect } from "react";
import Search from "./Search";
import TrendingProducts from "./TrendingProducts";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import "../Styles/Home.scss";

function Home() {
  const [clicked, setClicked] = useState(false);
  const [userTyping, setUserTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputClick = () => {
    setClicked(true);
  };

  const handleInputChange = () => {
    setUserTyping(true);
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

  return (
    <div className="home-container">
      <div className="search-container">
        <div className="zevi-logo">
          <img
            src="https://ci3.googleusercontent.com/mail-sig/AIorK4zeD0TD5C_ug1RQ2gcR9f4Q75R7WkMp4RrWtmf8fDsinDbiE-DPb3yE5LhtVLVV6YcORm-UIas"
            alt="logo"
            width={90}
            height={50}
          />
        </div>
        <Search
          handleInputClick={handleInputClick}
          inputRef={inputRef}
          onInputChange={handleInputChange}
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
            <ProductList />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;

