import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "85bba1f5472e43498d1d6c685f838035";
export default function Search({ foodData, setFoodData }) {
  // capture input
  const [query, setQuery] = useState("pizza");

  // synatx of useEffect hook
  // to fetcth data from an external api
  useEffect(() => {
    async function fetchFood() {
      // to get the api url
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      // decode the jason data
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
