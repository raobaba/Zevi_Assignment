import React, { useState, useRef, useEffect } from "react";
import Search from "./Search";
import TrendingProducts from "./TrendingProducts";
import "../Styles/Home.scss";

function Home() {
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null); // Specify the type as HTMLInputElement | null

  const handleInputClick = () => {
    setClicked(true);
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
        <Search handleInputClick={handleInputClick} inputRef={inputRef} />
      </div>
      <div className="trending-container">
        <TrendingProducts clicked={clicked} />
      </div>
    </div>
  );
}

export default Home;
