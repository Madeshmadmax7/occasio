import React, { useState } from "react";
import "../styles/Art.css";
import Navbar from "./Navbar";

const Art = ({ imageStates = {}, toggleStar }) => {
  const imageCount = 16;
  const images = Array.from({ length: imageCount }, (_, i) => `/art/img${i + 1}.jpg`);

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
      <div className="art-list-container">
        <h1 className="art-list-heading">Art Gallery</h1>
        <div className="art-list">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img${index + 1}`}
              className="art-list-image"
              loading="lazy"
              onClick={() => openImage(src)}
            />
          ))}
        </div>
        {selectedImage && (
          <div className="art-modal" onClick={closeModal}>
            <div className="art-modal-content">
              <img src={selectedImage} alt="Selected" className="art-modal-image" />
              <div className="art-modal-actions">
                <span className={`icon-container ${liked ? "active" : ""}`} onClick={toggleLike}>
                  <i className="fa fa-heart" />
                </span>
                <span
                  className={`icon-container ${
                    imageStates[selectedImage]?.starred ? "yellow" : ""
                  }`}
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

export default Art;
