import React from "react";
import { connect } from "react-redux";

import Product from "../ components/Product";
import Header from "../ components/Header";

import categoryForProductSelector from "../selectors/categoryForProductSelector";
import getNameOfId from "../selectors/getNameOfId";

const filterParametrsPrice = [0, 100, 200, 300, 400, 500, 600, 1000];

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
    const {
      categories,
      filterPriceFrom,
      filterPriceTo,
      filterValue,
      removeProduct,
      setQuantity,
      match
    } = this.props;
    return (
      <div className="products-page">
        <Header title={getNameOfId(categories, match.params.id)} />
        <main>
          <div className="filter">
            <span>Price:</span>
            <select onChange={e => filterPriceFrom(e.target.value)}>
              {filterParametrsPrice.map((parametr, i) => (
                <option key={i}>{parametr}</option>
              ))}
            </select>
            <select onChange={e => filterPriceTo(e.target.value)}>
              {filterParametrsPrice.map((parametr, i) => (
                <option key={i}>{parametr}</option>
              ))}
            </select>
          </div>
          <div className="product-items">
            {this.props.products.map(product =>
              product.price >= filterValue.priceFrom &&
              product.price <= filterValue.priceTo ? (
                <Product
                  key={product.id}
                  id={product.id}
                  product={product}
                  removeProduct={removeProduct}
                  setQuantity={setQuantity}
                  category={categoryForProductSelector(product, categories)}
                />
              ) : (
                <div key={product.id} />
              )
            )}
          </div>
        </main>
      </div>
    );
  }
}

const mapState = state => ({
  products: state.products.list,
  categories: state.categories.list,
  filterValue: state.filterValue
});

const mapDispatch = ({ products, categories, filterValue }) => ({
  loadAll: products.loadAll,
  loadCategories: categories.loadCategories,
  filterPriceFrom: filterValue.filterPriceFrom,
  filterPriceTo: filterValue.filterPriceTo
});

export default connect(
  mapState,
  mapDispatch
)(ProductsPage);
