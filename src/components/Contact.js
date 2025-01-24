import React, { useState } from "react";
import "../styles/Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
    const imageCount = 66;
    const images = Array.from({ length: imageCount }, (_, i) => `/horizontalimg/img${i + 1}.jpg`);
    const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return(
    <div>
      <Navbar />
      <div className="contact-wrapper">
        <div className="left-side">
          <div className="img-container-card" onClick={handleImageChange}>
            <img
              src={images[currentImage]}
              alt="Card Display"
              className="img-container-card"
            />
          </div>
          <br/>
          <div className="contact-info">
            <h2>Contact us</h2>
            <div className="info-item">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p>123 Main Street, Your City</p>
            </div>
            <div className="info-item">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>

        <div className="container right-aligned">
          <div className="screen">
            <div className="screen-body">
              <div className="screen-body-item">
                <div className="app-title">
                  <h1 className="head">Reach Out</h1>
                </div>
                <br />
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
