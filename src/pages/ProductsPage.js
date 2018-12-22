import React from "react";
import { connect } from "react-redux";

import Product from "../ components/Product";
import Header from "../ components/Header";

import categoryForProductSelector from "../selectors/categoryForProductSelector";
import getNameOfId from "../selectors/getNameOfId";

class ProductsPage extends React.Component {
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

    props.loadAll(productsQueryParams);
    props.loadCategories();
  }

  render() {
    return (
      <div className="products-page">
        <Header
          title={getNameOfId(this.props.categories, this.props.match.params.id)}
        />
        <main>
          {this.props.products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              product={product}
              removeProduct={this.props.removeProduct}
              setQuantity={this.props.setQuantity}
              category={categoryForProductSelector(
                product,
                this.props.categories
              )}
            />
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

const mapDispatch = ({ products, categories, productsInCart }) => ({
  loadAll: products.loadAll,
  loadCategories: categories.loadCategories
});

export default connect(
  mapState,
  mapDispatch
)(ProductsPage);
