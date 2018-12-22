import React from "react";
import { connect } from "react-redux";
import CartItem from "../ components/CartItem";
import Header from "../ components/Header";
import totalPriceSelector from "../selectors/totalPrice";

class CartPage extends React.Component {
  render() {
    const { cartItems, totalPrice } = this.props;
    return (
      <div className="cart-page">
        <Header title={"Basket"} />
        <main>
          {cartItems.map(item => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
              setQuantity={this.props.setQuantity}
              removeProduct={this.props.removeProduct}
            />
          ))}
          <p className="total">Total: €{totalPrice}</p>
        </main>
      </div>
    );
  }
}

const mapState = state => ({
  cartItems: state.productsInCart.items,
  totalPrice: totalPriceSelector(state.productsInCart)
});

const mapDispatch = ({ productsInCart }) => ({
  removeProduct: productsInCart.removeProduct,
  setQuantity: productsInCart.setQuantity
});

export default connect(
  mapState,
  mapDispatch
)(CartPage);
