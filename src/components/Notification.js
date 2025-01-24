import React from "react";
import Navbar from "./Navbar";
import "../styles/Notification.css";

const Notification = () => {

    return (
        <div>
            <Navbar />
            <div className="notifications-container">
                <h2>Your Notifications</h2>
                <h3>No new notifications</h3>
            </div>
        </div>
    );
};

export default Notification;
