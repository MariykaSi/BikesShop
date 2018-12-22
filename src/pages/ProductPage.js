import React from "react";
import { connect } from "react-redux";

import ProductExtended from "../ components/ProductExtended";
import Header from "../ components/Header";

import categoryForProductSelector from "../selectors/categoryForProductSelector";

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.loadOne(this.props.match.params.id);
  }

  render() {
    const product = this.props.product;
    return this.props.product ? (
      <div className="product-page">
        <Header title={product.name} />
        <main>
          <ProductExtended
            category={categoryForProductSelector(
              product,
              this.props.categories
            )}
            product={product}
          />
        </main>
      </div>
    ) : (
      "loading"
    );
  }
}

const mapState = (state, props) => ({
  categories: state.categories.list,
  product: state.products.list.find(
    product => product.id === props.match.params.id
  )
});

const mapDispatch = ({ products: { loadOne } }) => ({
  loadOne
});

export default connect(
  mapState,
  mapDispatch
)(ProductPage);
