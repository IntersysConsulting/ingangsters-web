import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Sign/Login";
import LoginAdmin from "../Sign/LoginAdmin";
import AdminPage from "../Admin/AdminPage/AdminPage";
import Signup from "../Sign/Signup";
import Checkout from "../Checkout/Checkout";
import Cart from "../Cart/Cart";
import ProductDetails from "../Home/Products/ProductDetails/ProductsDetails";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import { Provider } from "react-redux";
import store from "../../store";
import "../../css/colors.css";
import Product from "../Admin/Products/ProductView/ProductView";
import Logout from "../UI/Logout/Logout";
import ErrorPage from "../UI/ErrorPage/ErrorPage";
import ThankYou from "../Checkout/ThankYou/ThankYou";
import AccountDetails from "../AccountDetails/AccountDetails";
import Search from "../Search/Search";
import Footer from "../UI/Footer/Footer";
import MerchantView from "../Admin/Merchants/MerchantView/MerchantView";

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <UserRoute path="/" exact component={Home} />
          <UserRoute path="/checkout" exact component={Checkout} />
          <UserRoute path="/cart" exact component={Cart} />
          <UserRoute path="/products/search" component={Search} />
          <UserRoute path="/checkout/thankyou" exact component={ThankYou} />
          <UserRoute path="/account" exact component={AccountDetails} />
          <Route path="/details/:id" component={ProductDetails} />
          <AdminRoute path="/admin/merchant/:id" component={MerchantView} />
          <AdminRoute path="/admin/dashboard" exact component={AdminPage} />
          <AdminRoute path="/admin/product/:id" component={Product} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin/login" exact component={LoginAdmin} />
          <Route path="/logout" exact component={Logout} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default Routes;
