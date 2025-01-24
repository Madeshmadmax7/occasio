import React, { useState } from "react";
import "../styles/Amusement.css";
import Navbar from "./Navbar";

const Amusement = ({ imageStates = {}, toggleStar }) => {
  const imageCount = 13;
  const images = Array.from({ length: imageCount }, (_, i) => `/amusement/img${i + 1}.jpg`);

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
      <div className="amuse-list-container">
        <h1 className="amuse-list-heading">Amusement Parks & Exhibitions</h1>
        <div className="amuse-list">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img${index + 1}`}
              className="amuse-list-image"
              loading="lazy"
              onClick={() => openImage(src)}
            />
          ))}
        </div>
        {selectedImage && (
          <div className="amuse-modal" onClick={closeModal}>
            <div className="amuse-modal-content">
              <img src={selectedImage} alt="Selected" className="amuse-modal-image" />
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

export default Amusement;
