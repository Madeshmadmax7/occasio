import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./components/Home";
import Events from "./components/Events";
import ListImages from "./components/ListImages";
import Booked from "./components/Booked";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import Art from "./components/Art";
import Amusement from "./components/Amusement";
import Business from "./components/Business";
import Car from "./components/Car";
import Concert from "./components/Concert";
import Dance from "./components/Dance";
import Fashion from "./components/Fashion";
import Office from "./components/Office";
import Tech from "./components/Tech";
import Login from "./components/Login";

const App = () => {
  const [imageStates, setImageStates] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const toggleStar = (src) => {
    setImageStates((prevStates) => ({
      ...prevStates,
      [src]: {
        ...prevStates[src],
        starred: !prevStates[src]?.starred,
      },
    }));
  };
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
    if (storedLoginStatus) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  return (

    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/home" /> : <Login setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
      <Route path="/event" element={<Events />} />
      <Route path="/image" element={<ListImages imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/booked" element={<Booked imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/profile"
        element={isLoggedIn ? <Profile username={username} setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />}
      />
      <Route path="/notification" element={<Notification />} />
      <Route path="/amusement" element={<Amusement imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/art" element={<Art imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/business" element={<Business imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/car" element={<Car imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/concert" element={<Concert imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/dance" element={<Dance imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/fashion" element={<Fashion imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/office" element={<Office imageStates={imageStates} toggleStar={toggleStar}/>} />
      <Route path="/tech" element={<Tech imageStates={imageStates} toggleStar={toggleStar} />} />
      <Route path="*" element={<Navigate to="/" imageStates={imageStates} toggleStar={toggleStar}/>} />
    </Routes>
  );
};

export default App;