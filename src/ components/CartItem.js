import React from "react";

export default function CartItem({
  product,
  quantity,
  setQuantity,
  removeProduct,
  addOne,
  removeOne
}) {
  return (
    <div>
      {product.name}-{quantity}
      <input
        type="number"
        value={quantity}
        onChange={e => setQuantity(product.id, e.target.value)}
      />
      <button onClick={() => addOne(product.id, Number(quantity) + 1)}>
        +1
      </button>
      <button onClick={() => removeOne(product.id, Number(quantity) - 1)}>
        -1
      </button>
      <button onClick={() => removeProduct(product.id)}>
        remove from cart
      </button>
    </div>
  );
}
