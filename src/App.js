import React, { Component } from "react";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/cart" component={CartPage} />

              <Route path="/products/:id" component={ProductPage} />
              <Route path="/products" component={ProductsPage} />

              <Route path="/categories/:id" component={ProductsPage} />

              <Route path="/" component={CategoriesPage} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
