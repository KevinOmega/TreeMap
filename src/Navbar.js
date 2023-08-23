import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="title">
        <h2>TreeMap</h2>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link className="a active" to={"/"}>
              VideoGames
            </Link>
          </li>
          <li>
            <Link className="a" to={"/"}>
              Kickstarter
            </Link>
          </li>
          <li>
            <Link className="a" to={"/"}>
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
