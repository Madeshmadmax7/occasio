import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Card from "./Card";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setScrolled(currentScrollPos > 20);
      } else {
        setScrolled(currentScrollPos > 100);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="home-container">
      <Navbar />
      <h1 className={`title ${scrolled ? "scrolled" : ""}`}>Occasio</h1>
      <h1 className={`slogan ${scrolled ? "hidden" : "visible"}`}>
        Seize the Moment, Shape the Future!
      </h1>
      <br/>
      <Card/>
      <br/>
      <br/>
      <h1 className={`text`}>
        Who are we?
      </h1>
      <div className="xyz-text-box">
        <p className="xyz-text">
        Welcome to Occasio, your go-to solution for managing exhibitions, conferences, and concerts. We simplify event planning with features like venue selection, attendee management, scheduling, and budget tracking.
        With secure payments, real-time updates, and 24/7 support, we ensure a stress-free experience. Every event is unique, and our customized solutions help bring your vision to life.
        Partner with Occasio to create unforgettable events!
        </p>
      </div>
      <br/>
      <br/>
      <h1 className={`text`}>
        Collage
      </h1>
      <Slider/>
    </div>
  );
};

export default Home;
