import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    const category = this.props.category;
    return <Link to={`/categories/${category.id}`}>{category.name}</Link>;
  }
}

export default Category;
