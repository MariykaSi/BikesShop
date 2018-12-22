import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <Route path="/cart" component={CartPage} /> */}

            {/* <Route path="/products/:id" component={ProductPage} />
            <Route path="/products" component={ProductsPage} />

            <Route path="/categories/:id" component={CategoriesPage} /> */}

            <Route path="/" component={CategoriesPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
