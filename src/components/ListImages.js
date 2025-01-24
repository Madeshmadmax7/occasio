import React, { useState } from "react";
import "../styles/ListImages.css";
import Navbar from "./Navbar";

const ListImages = ({ imageStates = {}, toggleStar }) => {
  const imageCount = 66;
  const images = Array.from({ length: imageCount }, (_, i) => `/listimg/img${i + 1}.jpg`);

  const [selectedImage, setSelectedImage] = useState(null);
  const [liked, setLiked] = useState(false);
  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };
  return (
    <div>
      <Navbar />
      <div className="ghi-list-container">
        <h1 className="ghi-list-heading">Event Photos</h1>
        <div className="ghi-list">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img${index + 1}`}
              className="ghi-list-image"
              loading="lazy"
              onClick={() => openImage(src)}
            />
          ))}
        </div>
        {selectedImage && (
          <div className="ghi-modal" onClick={closeModal}>
            <div className="ghi-modal-content">
              <img src={selectedImage} alt="Selected" className="ghi-modal-image" />
              <div className="ghi-modal-actions">
                <span className={`icon-container ${liked ? 'active' : ''}`} onClick={toggleLike}>
                  <i className="fa fa-heart" />
                </span>
                <span
                  className={`icon-container ${imageStates[selectedImage]?.starred ? 'yellow' : ''}`}
                  onClick={() => toggleStar(selectedImage)}
                >
                  <i className="fa fa-star" />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListImages;
