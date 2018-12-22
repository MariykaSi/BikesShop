import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import icon from "../img/icon-cart.png";
import numberProductsInCart from "../selectors/numberProductsInCart";
import totalPrice from "../selectors/totalPrice";

export function CartButton({ productsQuantity, totalPrice }) {
  return (
    <div className="cart-button">
      <Link to="/cart">
        {" "}
        <img alt="" src={icon} />
        <span>BASKET ({Number(productsQuantity)})</span>
      </Link>
    </div>
  );
}

const mapState = state => ({
  productsQuantity: numberProductsInCart(state.productsInCart),
  totalPrice: totalPrice(state.productsInCart, state.products.list)
});

export default connect(mapState)(CartButton);
