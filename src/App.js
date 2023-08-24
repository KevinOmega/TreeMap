import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./app.css";
import { links } from "./data";
import * as d3 from "d3";

const App = () => {
  const { category } = useParams();
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState({});

  const fetchData = useCallback(() => {
    let url = links.filter((d) => d.name === category)[0].link;
    d3.json(url).then((value) => setData(value));
  }, [category]);

  const drawTreeMap = () => {
    const svg = d3
      .select(".app-center")
      .append("svg")
      .attr("width", "100%")
      .style("background", "white");
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data.name) {
      drawTreeMap();
    }
  }, [data]);

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
