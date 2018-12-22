import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "../components/Category";
import logo from "../img/logo.png";

class Header extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }
  render() {
    return (
      <header>
        <div className="header-container">
          <a className="logo" href="/">
            <img alt="" src={logo} />
          </a>
          <nav className="categories-menu">
            {this.props.categories.map(category => (
              <Category key={category.id} category={category} />
            ))}
          </nav>
        </div>
        <div className="title-text">
          <p>{this.props.categoryName}</p>
        </div>
      </header>
    );
  }
}
const mapState = state => ({
  categories: state.categories.list
});

const mapDispatch = ({ categories: { loadCategories } }) => ({
  loadCategories
});
export default connect(
  mapState,
  mapDispatch
)(Header);
