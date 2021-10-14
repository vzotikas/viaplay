import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <img
                className="logo"
                src="https://viaplay-web-frontend-assets.mtg-api.com/frontend-2021101228895/images/header-logo-large.png"
                alt=""
              />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
