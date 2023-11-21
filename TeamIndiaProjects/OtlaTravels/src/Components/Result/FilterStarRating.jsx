import React, { useState } from 'react';

const FilterStarRating = ({selectedStarRatings, setSelectedStarRatings}) => {

  const handleStarRatingChange = (rating) => {
    setSelectedStarRatings((prevRatings) =>
      prevRatings.includes(rating)
        ? prevRatings.filter((prevRating) => prevRating !== rating)
        : [...prevRatings, rating]
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <img key={index} src="/assets/images/home/star.png" alt={`Star ${index + 1}`} />
    ));
  };

  return (
    <div className="filtertab">
      <div className="title newfiltertitle">Star Rating</div>
      <ul className="starratinglist">
        {[5, 4, 3, 2, 1].map((rating) => (
          <li key={rating}>
            <label>
              <input
                type="checkbox"
                className="starrating"
                data-value={rating}
                onChange={() => handleStarRatingChange(rating)}
                checked={selectedStarRatings.includes(rating)}
              />
              {renderStars(rating)}
              <span className="checkspan"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterStarRating;
