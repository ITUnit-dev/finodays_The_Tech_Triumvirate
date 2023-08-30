import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import companyLogo from "../images/logo.png";

const Header = ({ isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to={isLoggedIn ? "/home" : "/"} className="logo-link">
            <img src={companyLogo} width="60px" alt="Логотип" />
          </Link>
          {isLoggedIn && (
            <div className="header-links">
              <Link to="/home/assets" className="header-link">
                Мои активы
              </Link>
              <Link to="/home/stock" className="header-link">
                Биржа
              </Link>
              <Link to="/home/history" className="header-link">
                История транзакций
              </Link>
              <Link to="/home/recharge" className="header-link">
                Пополнить счет
              </Link>
            </div>
          )}
        </div>
        <div className="header-right">
          {isLoggedIn && (
            <div className="header-right-client">
              <div className="user-icon" />
              <button onClick={onLogout} className="logout-button">
                Выйти
              </button>
            </div>
          )}
          <button onClick={toggleMenu} className="menu-button">
            <i className="fa fa-bars">---</i>
          </button>
        </div>
        {isMenuOpen && (
          <div className={`menu-links ${isMenuOpen ? "active" : ""}`}>
            <Link to="/home/assets" className="menu-link">
              Мои активы
            </Link>
            <Link to="/home/stock" className="menu-link">
              Биржа
            </Link>
            <Link to="/home/history" className="menu-link">
              История транзакций
            </Link>
            <Link to="/home/recharge" className="menu-link">
              Пополнить счет
            </Link>
            <div className="menu-block">
              <div className="user-icon" />
              <button onClick={onLogout} className="logout-button">
                Выйти
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
