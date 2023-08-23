import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { links } from "./data";

const Navbar = () => {
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
                <Link className="a" to={"/" + name}>
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
