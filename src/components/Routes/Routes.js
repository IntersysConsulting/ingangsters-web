import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Sign/Login";
import SigninAdmin from "../Sign/SigninAdmin";
import Signup from "../Sign/Signup";
import Checkout from "../Checkout/Checkout";
import Cart from "../Cart/Cart";
import ProductDetails from "../Home/ProductDetails/ProductsDetails";
import { Provider } from "react-redux";
import store from "../../store";
import "../../css/colors.css";
import AdminPage from "../AdminPage/AdminPage";

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={AdminPage} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signin/admin" exact component={SigninAdmin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details" exact component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;
