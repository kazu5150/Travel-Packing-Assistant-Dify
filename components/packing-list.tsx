export function PackingList({ items }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - Quantity: {item.quantity}</li>  // 修正されたコード
        ))}
      </ul>
    );
  }
  