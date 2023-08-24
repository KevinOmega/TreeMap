import React from "react";
import { useParams } from "react-router-dom";
import "./app.css";

const App = () => {
  const { category } = useParams();

  return (
    <div className="app">
      <div id="description">
        <h1>{category}</h1>
      </div>
      <div className="app-center"></div>
    </div>
  );
};

export default App;
