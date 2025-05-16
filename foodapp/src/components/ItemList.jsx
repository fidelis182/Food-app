import Item from "./Item";

// import styles from "./Module/item.module.css";
export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        food.extendedIngredients?.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
