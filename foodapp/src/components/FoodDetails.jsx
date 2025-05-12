import { useEffect, useState } from "react";
import styles from "./Module/foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "85bba1f5472e43498d1d6c685f838035";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json(); // ✅ Correct method
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes}</strong>
          </span>
          <span>
            👨‍👩‍👦‍👦<strong>Serves {food.servings}</strong>
          </span>
          <span>
            {" "}
            <strong>
              {food.vegetarian ? " 🥕Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>{" "}
          </span>
          <span>
            {" "}
            <strong>{food.vegan ? " 🐮Vegan" : ""}</strong>{" "}
          </span>
        </div>
        <div>
          <span>
            $<strong> {food.pricePerServing / 100}</strong>
          </span>
        </div>

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
