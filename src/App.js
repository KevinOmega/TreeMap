import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./app.css";
import { links } from "./data";
import * as d3 from "d3";

const App = () => {
  const { category } = useParams();
  const [data, setData] = useState({});

  const appRef = useRef();

  const fetchData = useCallback(() => {
    let url = links.filter((d) => d.name === category)[0].link;
    d3.json(url).then((value) => setData(value));
  }, [category]);

  const drawTreeMap = useCallback(() => {
    const svg = d3
      .select(".app-center")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("background", "white");
    const color = d3.scaleOrdinal().range(d3.schemeCategory10);
    const width = appRef.current.getBoundingClientRect().width;
    const height = appRef.current.getBoundingClientRect().height;

    const treeMap = d3.treemap().size([width, height]).paddingInner(2);

    const root = d3.hierarchy(data);

    root.sum((d) => d.value);
    root.sort((a, b) => b.height - a.height || b.value - a.value);

    treeMap(root);

    const cell = svg
      .selectAll("g")
      .data(root.leaves())
      .enter()
      .append("g")
      .attr("class", "group")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    const rect = cell
      .append("rect")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("fill", (d) => color(d.data.category));

    cell
      .append("text")
      .attr("class", "tile-text")
      .selectAll("tspan")
      .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
      .enter()
      .append("tspan")
      .attr("y", (d, i) => 10 + i * 10)
      .attr("x", 3)
      .text((d) => d);
  }, [data]);

  const remove = () => {
    d3.select(".app-center").select("svg").remove();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data.name) {
      remove();
      drawTreeMap();
    }
  }, [data, drawTreeMap]);

  return (
    <div className="app">
      <div id="description">
        <h1>{category}</h1>
      </div>
      <div className="app-center" ref={appRef}></div>
    </div>
  );
};

export default App;
