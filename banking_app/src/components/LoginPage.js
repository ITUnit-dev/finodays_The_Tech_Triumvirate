import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../styles/loginPage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("password");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      onLogin();
      setIsLoggedIn(true);
    }
  };
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="page-container">
      <h1 className="app-title">CFA Trading App</h1>
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
