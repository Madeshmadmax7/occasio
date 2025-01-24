import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ setUsername, setIsLoggedIn }) => {
  const [localUsername, setLocalUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setLocalUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError("Password must include at least one uppercase letter.");
    } else if (!/\d/.test(value)) {
      setPasswordError("Password must include at least one number.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordError && localUsername && password) {
      setUsername(localUsername);
      localStorage.setItem("username", localUsername);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      alert("Login successful");
      navigate("/home");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <section className="qwe-section">
      {Array.from({ length: 400 }).map((_, i) => (
        <span key={i} className="qwe-span"></span>
      ))}
      <div className="qwe-signin">
        <div className="qwe-content">
          <h2>Sign In</h2>
          <form className="qwe-form" onSubmit={handleSubmit}>
            <div className="qwe-inputBox">
              <input
                type="text"
                value={localUsername}
                onChange={handleUsernameChange}
                required
              />
              <i>Username</i>
            </div>
            <div className="qwe-inputBox">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <i>Password</i>
            </div>
            {passwordError && <p className="qwe-error">{passwordError}</p>}
            <div className="qwe-links">
              <a>Forgot Password</a>
              <a>Signup</a>
            </div>
            <div className="qwe-inputBox">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;