import React, { useState } from 'react';
import '../Styles/ProductFilter.scss';

type ProductFilterProps = {
  onSortChange: (ascending: boolean) => void;
  onPriceFilterChange: (minPrice: number, maxPrice: number) => void;
  onRatingFilterChange: (rating: number) => void;
};

const ProductFilter: React.FC<ProductFilterProps> = ({
  onSortChange,
  onPriceFilterChange,
  onRatingFilterChange,
}) => {
  const [ascending, setAscending] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleSortChange = () => {
    onSortChange(ascending);
    setAscending(!ascending);
  };

  const handlePriceFilterChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
    onPriceFilterChange(min, max);
  };

  const handleRatingFilterChange = (rating: number) => {
    setSelectedRating(rating);
    onRatingFilterChange(rating);
  };

  return (
    <div className="product-filter">
      <h2>Product Filters</h2>
      <div>
        <h3>Sort by Name</h3>
        <label>
          <input
            type="checkbox"
            checked={ascending}
            onChange={handleSortChange}
          />{' '}
          A to Z
        </label>
      </div>
      <div>
        <h3>Filter by Price Range</h3>
        <label>
          Below 500:
          <input
            type="radio"
            name="priceRange"
            checked={minPrice === 0 && maxPrice === 500}
            onChange={() => handlePriceFilterChange(0, 500)}
          />
        </label>
        <label>
          500 - 3000:
          <input
            type="radio"
            name="priceRange"
            checked={minPrice === 500 && maxPrice === 3000}
            onChange={() => handlePriceFilterChange(500, 3000)}
          />
        </label>
        <label>
          Above 3000:
          <input
            type="radio"
            name="priceRange"
            checked={minPrice === 3000}
            onChange={() => handlePriceFilterChange(3000, Number.MAX_SAFE_INTEGER)}
          />
        </label>
      </div>
      <div>
        <h3>Filter by Ratings</h3>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating}>
            {rating} star:
            <input
              type="radio"
              name="rating"
              value={rating}
              checked={selectedRating === rating}
              onChange={() => handleRatingFilterChange(rating)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;

