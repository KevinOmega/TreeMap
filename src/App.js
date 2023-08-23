import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const App = () => {
  const { category } = useParams();
  const { navigate } = useNavigate();

  useEffect(() => {
    if (!category) {
      return navigate("/movies");
    }
  }, [category, navigate]);

  return <div>{category} app</div>;
};

export default App;
