import React, { useState } from "react";
import Search from "./Search";
import TrendingProducts from "./TrendingProducts";
import "../Styles/Home.scss";

function Home() {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleInputClick = () => {
    setClicked(true);
  };

  return (
    <div className="home-container">
      <div className="search-container">
        <div className="zevi-logo">
          <img
            src="https://ci3.googleusercontent.com/mail-sig/AIorK4zeD0TD5C_ug1RQ2gcR9f4Q75R7WkMp4RrWtmf8fDsinDbiE-DPb3yE5LhtVLVV6YcORm-UIas"
            alt="logo"
          />
        </div>
        <Search handleInputClick={handleInputClick} />
      </div>
      <div className="trending-container">
        <TrendingProducts clicked={clicked} />
      </div>
    </div>
  );
}

export default Home;
