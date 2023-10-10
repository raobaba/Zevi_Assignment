import React from 'react';
import Search from './Search';
import '../Styles/Home.scss'; 

function Home() {
  return (
    <div className="home-container">
 
      <div className="search-container">
      <div className="zevi-logo">
            Zevi
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
