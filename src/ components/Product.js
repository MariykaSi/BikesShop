import React from "react";
import { Link } from "react-router-dom";

export function Product({ product }) {
  return (
    <article>
      <img src={product.image} alt={product.name} />
      <p className="title">{product.name}</p>
      <p>{`€${product.price.toFixed(2)}`}</p>
      <Link to={`/products/${product.id}`}>
        <button>BUY NOW</button>
      </Link>
    </article>
  );
}
export default Product;
