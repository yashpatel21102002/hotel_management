import React, { useState } from "react";

const Rating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 4);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? "/images/redstar.png" : "/images/emptyredstar.png"}
          width={20}
          height={20}
          alt={`Star ${i}`}
          onClick={() => handleRatingChange(i)}
          style={{
            cursor: "pointer",
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      {/* <p>Rating: {rating} stars</p> */}
      <div className="flex gap-1">{renderStars()}</div>
    </div>
  );
};

export default Rating;
