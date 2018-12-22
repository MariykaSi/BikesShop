import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Category";
import getNameOfId from "../selectors/getNameOfId";

class ProductPage extends Component {
  componentDidMount() {
    this.props.loadOne(this.props.match.params.id);
  }

  render() {
    return (
      <div className="product-page">
        {/* <Header
          categoryName={getNameOfId(
            this.props.products,
            this.props.match.params.id
          )}
        /> */}
      </div>
    );
  }
}

const mapState = (state, props) => ({
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
