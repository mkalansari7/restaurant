import React from "react";
import MealsList from "./MealsList";

const Home = () => {
  return (
    <div className="App">
      <h1>Restaurants</h1>
      <p>my fav restaurants</p>
      <img
        alt="restaurant image"
        className="restaurant-banner"
        src="https://wikiforschool.com/uploads/1261021200px-kfc_logo.svg.png"
      />
      <MealsList />
    </div>
  );
};

export default Home;
