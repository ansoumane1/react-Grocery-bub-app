import SingleItem from "./SingleItem";
function Items({ items, removeItem, editItem }) {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
}

export default Items;
