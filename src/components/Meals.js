import React from "react";

const Meals = ({ meal }) => {
  return (
    <div className="App">
      <h1>{meal.name}</h1>
      <h3>{meal.price}</h3>
      <img alt="twister image" className="App" src={meal.img} />
    </div>
  );
};

export default Meals;
