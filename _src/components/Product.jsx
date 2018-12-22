import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <article>
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </Link>
        <p>{`€${product.price.toFixed(2)}`}</p>
        <button>BUY NOW</button>
      </article>
    );
  }
}

export default Product;
