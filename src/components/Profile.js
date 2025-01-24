import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import Navbar from "./Navbar";

const Profile = ({ username, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="poi-body">
      <Navbar />
      <div className="poi-profile-container">
        <div className="poi-user-card">
          <div className="poi-user-section">
            <img
              src="https://img.icons8.com/bubbles/100/000000/user.png"
              className="poi-profile-img"
              alt="User Profile"
            />
            <h6 className="poi-profile-name">{username || "Guest"}</h6>
          </div>
          <div className="poi-info-section">
            <h6 className="poi-info-header">Information</h6>
            <div className="poi-info-grid">
              <div className="poi-info-item">
                <p className="poi-info-label">Name</p>
                <h6 className="poi-info-text">{username || "John Doe"}</h6>
              </div>
            </div>
          </div>
          <button className="poi-logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;