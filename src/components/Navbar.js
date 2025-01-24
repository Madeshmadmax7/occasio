import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="abc-navbar">
      <ul className="abc-nav-sidebar">
        <li><Link to="/" className="abc-nav-link"><i className="fas fa-home"></i><span>Home</span></Link></li>
        <li><Link to="/event" className="abc-nav-link"><i className="fas fa-th"></i><span>Events</span></Link></li>
        <li><Link to="/image" className="abc-nav-link"><i className="fas fa-image"></i><span>Image</span></Link></li>
        <li><Link to="/booked" className="abc-nav-link"><i className="fas fa-star"></i><span>Book Marked</span></Link></li>
        <br/>
        <br/>
        <br/>
        <br/>
        <li><Link to="/contact" className="abc-nav-link"><i className="fas fa-phone"></i><span>Contact</span></Link></li>
        <li><Link to="/profile" className="abc-nav-link"><i className="fas fa-user"></i><span>Profile</span></Link></li>
        <li><Link to="/notification" className="abc-nav-link"><i className="fas fa-bell"></i><span>Notifications</span></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
