import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <div>
      {/* to display the data to our website */}
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
