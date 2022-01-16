import "./App.css";
import products from "./products";

function App() {
  return (
    <div className="App">
      <h1>Restaurants</h1>
      <p>my fav restaurants</p>
      <img
        alt="restaurant image"
        className="restaurant-banner"
        src="https://wikiforschool.com/uploads/1261021200px-kfc_logo.svg.png"
      />
      <p>{products[0].name}</p>
      <p>{products[0].price}</p>
      <img alt="twister image" className="App" src={products[0].img} />
      <p>{products[1].name}</p>
      <p>{products[1].price}</p>
      <img alt="twister image" className="App" src={products[1].img} />
    </div>
  );
}

export default App;
