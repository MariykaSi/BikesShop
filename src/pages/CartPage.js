import React from "react";
import { connect } from "react-redux";
import CartItem from "../ components/CartItem";
import Header from "../ components/Header";

class CartPage extends React.Component {
  render() {
    return (
      <div className="product-page">
        <Header title={"Basket"} />
        {this.props.cartItems.map(item => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
            setQuantity={this.props.setQuantity}
            removeProduct={this.props.removeProduct}
            addOne={this.props.addOne}
            removeOne={this.props.removeOne}
          />
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  cartItems: state.productsInCart.items
});

const mapDispatch = ({ productsInCart }) => ({
  removeProduct: productsInCart.removeProduct,
  setQuantity: productsInCart.setQuantity,
  addOne: productsInCart.setQuantity,
  removeOne: productsInCart.setQuantity
});

export default connect(
  mapState,
  mapDispatch
)(CartPage);
