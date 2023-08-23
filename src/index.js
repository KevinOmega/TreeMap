import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import App from "./App";
import { links } from "./data";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        {links.map((d) => (
          <Route exact path={`/${d.name}`} element={<App link={d.link} />} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);
