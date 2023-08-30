import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import PaymentsPage from "./components/PaymentsPage";
import RechargePage from "./components/RechargePage";
import AssetsPage from "./components/AssetsPage";
import StockMarket from "./components/StockMarket";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/*"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                {isLoggedIn ? (
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/stock" element={<StockMarket />} />
                    <Route path="/home/history" element={<PaymentsPage />} />
                    <Route path="/home/recharge" element={<RechargePage />} />
                    <Route path="/home/assets" element={<AssetsPage />} />
                  </Routes>
                ) : (
                  <Navigate to="/" />
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
