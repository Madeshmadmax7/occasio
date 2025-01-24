import React from "react";
import "../styles/Events.css";  
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };
  return(
    <div>
      <Navbar />
      <div className="events-container">
        <h1 className="event-h1">Events</h1>
        <h2 className="event-category">Exhibitions</h2>
        <div className="card-row">
        <div className="card" onClick={() => handleCardClick("/art")}>
            <div className="card-image">
              <img src="/horizontalimg/img31.jpg" alt="Art Exhibition" />
            </div>
            <div className="card-content">
              <h3>Art Exhibition</h3>
              <p>Explore the world of artistic creations and exhibits.</p>
            </div>
          </div>
          <div className="card" onClick={() => handleCardClick("/car")}>
            <div className="card-image">
              <img src="/horizontalimg/img19.jpg" alt="Car Exhibition" /> 
            </div>
            <div className="card-content">
              <h3>Car Exhibition</h3>
              <p>Showcasing classic and modern automobiles.</p>
            </div>
          </div>
          <div className="card" onClick={() => handleCardClick("/amusement")}>
            <div className="card-image">
              <img src="/horizontalimg/img27.jpg" alt="Amusement Park Exhibition" /> 
            </div>
            <div className="card-content">
              <h3>Amusement Park Exhibition</h3>
              <p>A thrilling experience with rides and fun activities.</p>
            </div>
          </div>
        </div>
        <h2 className="event-category">Conferences</h2>
        <div className="card-row">
          <div className="card" onClick={() => handleCardClick("/office")}>
            <div className="card-image">
              <img src="/horizontalimg/img13.jpg" alt="Office Conference" /> 
            </div>
            <div className="card-content">
              <h3>Office Conference</h3>
              <p>Professional meetings and discussions.</p>
            </div>
          </div>
          <div className="card" onClick={() => handleCardClick("/business")}>
            <div className="card-image">
              <img src="/horizontalimg/img49.jpg" alt="Business Conference" /> 
            </div>
            <div className="card-content">
              <h3>Business Conference</h3>
              <p>Insights and networking opportunities for businesses.</p>
            </div>
          </div>
          <div className="card" onClick={() => handleCardClick("/tech")}>
            <div className="card-image">
              <img src="/horizontalimg/img34.jpg" alt="Tech Conference" /> 
            </div>
            <div className="card-content">
              <h3>Tech Conference</h3>
              <p>Innovations and trends in the tech industry.</p>
            </div>
          </div>
        </div>
        <h2 className="event-category">Shows</h2>
        <div className="card-row">
          <div className="card" onClick={() => handleCardClick("/concert")}>
            <div className="card-image">
              <img src="/horizontalimg/img43.jpg" alt="Concert" /> 
            </div>
            <div className="card-content">
              <h3>Concerts</h3>
              <p>Experience live music performances and entertainment.</p>
            </div>
          </div>
          <div className="card" onClick={() => handleCardClick("/dance")}>
            <div className="card-image">
              <img src="/horizontalimg/img48.jpg" alt="Dance Show" /> 
            </div>
            <div className="card-content">
              <h3>Dance Shows</h3>
              <p>Enjoy mesmerizing performances by talented dancers.</p>
            </div>
          </div>
          <div className="card" onClick={() => handleCardClick("/fashion")}>
            <div className="card-image">
              <img src="/horizontalimg/img51.jpg" alt="Fashion Show" /> 
            </div>
            <div className="card-content">
              <h3>Fashion Shows</h3>
              <p>Witness stunning designs and creativity on the runway.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
