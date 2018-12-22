import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Header from "../components/Header";
import getNameOfId from "../selectors/getNameOfId";

class ProductsPage extends Component {
  componentDidMount() {
    this.loadData(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url !== this.props.match.url) {
      this.loadData(nextProps);
    }
  }
  loadData(props) {
    if (props.match.path === "/categories/:id") {
      var productsQueryParams = {
        filter: { categoryId: props.match.params.id }
      };
    }
    props.loadProducts(productsQueryParams);
  }

  render() {
    return (
      <div className="products-page">
        <Header
          categoryName={getNameOfId(
            this.props.categories,
            this.props.match.params.id
          )}
        />
        <main>
          {this.props.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </main>
      </div>
    );
  }
}
const mapState = state => ({
  products: state.products.list,
  categories: state.categories.list
});

const mapDispatch = ({ products: { loadProducts } }) => ({
  loadProducts
});
export default connect(
  mapState,
  mapDispatch
)(ProductsPage);
