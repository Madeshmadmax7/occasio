import React, { useState } from 'react';
import '../styles/Slider.css';

const Slider = () => {
  const imageCount = 48;
  const [selectedSlide, setSelectedSlide] = useState(0);

  return (
    <section className="carousel">
      <div className="carousel__main">
        <img
          src={`/horizontalimg/img${selectedSlide + 1}.jpg`}
          alt={`Main Slide ${selectedSlide + 1}`}
          className="main-image"
        />
      </div>
      <div className="carousel__thumbnails">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="thumbnail">
            <img
              src={`/horizontalimg/img${(selectedSlide + i + 1) % imageCount + 1}.jpg`}
              alt={`Thumbnail ${i + 1}`}
              onClick={() => setSelectedSlide((selectedSlide + i + 1) % imageCount)}
              className={selectedSlide === (selectedSlide + i + 1) % imageCount ? 'active' : ''}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
