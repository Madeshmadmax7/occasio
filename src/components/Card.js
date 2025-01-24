import React from 'react';
import '../styles/Card.css';

const Card = () => {
  return (
    <div className="list">
      <div className="items">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="item">
            <img
              src={`/verticalimg/img${index + 1}.jpg`}
              alt={`im ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
