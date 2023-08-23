import React from "react";
import { useParams } from "react-router-dom";

const App = () => {
  const { category } = useParams();

  return <div>{category} app</div>;
};

export default App;
