export default function FoodList({ foodData }) {
  return (
    <div>
      {/* to display the data to our website */}
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </div>
  );
}
