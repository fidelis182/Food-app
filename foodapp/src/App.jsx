import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./app.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Navbar />
      {/* passing our array as props */}
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
