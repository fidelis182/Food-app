import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./app.css";
import Container from "./components/Container";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Navbar />
      {/* passing our array as props */}
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <FoodList foodData={foodData} />
      </Container>
    </div>
  );
}

export default App;
