import React from "react";
import renderer from "react-test-renderer";
import { CartButton } from "./CartButton";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

describe("CartButton", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <CartButton productsQuantity={5} totalPrice={"100.10"} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has correct link", () => {
    const testInstance = renderer.create(
      <Router>
        <CartButton productsQuantity={5} totalPrice={"100.10"} />
      </Router>
    ).root;
    expect(testInstance.findByType(Link).props.to).toBe("/cart");
  });
});
