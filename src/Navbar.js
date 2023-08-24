import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { links } from "./data";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div id="title">
        <h2>TreeMap</h2>
      </div>
      <div className="links">
        <ul>
          {links.map((d) => {
            const { id, name } = d;
            return (
              <li key={id}>
                <Link
                  className={`a ${
                    location.pathname.match(/\w*/g)[1] === name && "active"
                  }`}
                  to={"/" + name}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
