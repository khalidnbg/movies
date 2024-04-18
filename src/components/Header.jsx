import React from "react";
// import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <a to="/">Movies</a>
          </div>
          <ul className="nav-links">
            <li>
              <a to="/">Watch List</a>
            </li>
            <li>
              <a to="/watched">Watched</a>
            </li>
            <li>
              <a to="/add" className="btn">
                Add
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
