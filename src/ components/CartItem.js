import React from "react";

export default function CartItem({
  product,
  quantity,
  setQuantity,
  removeProduct
}) {
  return (
    <article>
      <img src={product.image} alt={product.name} />
      <div className="details">
        <p className="title">{product.name}</p>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(product.id, e.target.value)}
        />
        <p>1x {`€${product.price.toFixed(2)}`}</p>
        <button onClick={() => removeProduct(product.id)}>remove</button>
      </div>
    </article>
  );
}
