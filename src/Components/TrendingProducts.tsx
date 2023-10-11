import React from 'react';
import '../Styles/TrendingProducts.scss';
import { generateFakeClothingData } from '../Utils/fakeDataGenerator';

interface TrendingProductsProps {
  clicked: boolean;
}

function TrendingProducts({ clicked }: TrendingProductsProps) {
  let clothingData: {
    image: string | undefined;
    name: string;
  }[] = [];

  if (clicked) {
    clothingData = generateFakeClothingData();
  }

  return (
    <div className={`trending-products ${clicked ? 'background-white' : ''}`}>
      <h2 className="trending-heading">Trending Products</h2>
      <div className="product-list">
        {clothingData.map((item, index) => (
          <div className="product-item" key={index}>
            <img src={item.image} alt="No Name" className='trending-image'/>
            <p className="product-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingProducts;
