import React from "react";
import products from "../products";
import Meals from "./Meals";

const MealsList = () => {
  return (
    <div>
      {products.map((meal) => (
        <Meals meal={meal} />
      ))}
    </div>
  );
};

export default MealsList;
