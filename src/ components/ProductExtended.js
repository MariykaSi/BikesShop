import React from "react";
import { connect } from "react-redux";

function ProductExtended({ product, category, addProduct }) {
  return (
    <article className="product">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-discription">
        <h1>{product.name}</h1>
        <h2>Category: {category ? category.name : ""}</h2>
        <p>{product.description}</p>
        <p className="price">{`€${product.price.toFixed(2)}`}</p>
        <button onClick={addProduct}>ADD TO CART</button>
      </div>
    </article>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProduct: () => dispatch.productsInCart.addProduct(ownProps.product)
});
export default connect(
  null,
  mapDispatchToProps
)(ProductExtended);
