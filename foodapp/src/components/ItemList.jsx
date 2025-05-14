export default function ItemList({ food, isLoading }) {
  return;
  <div>
    {isLoading ? (
      <p>Loading</p>
    ) : (
      food?.extendedIngredients?.map((items) => (
        <div>
          <img
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + items.image
            }
            alt=""
          />
          <h3>{items.name}</h3>
          <h3>
            {items.amount}
            {items.unit}
          </h3>
        </div>
      ))
    )}
  </div>;
}
