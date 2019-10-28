import React, { useEffect } from "react";
import AdminNavBar from "../NavBars/AdminNavBar/AdminNavBar";
import { connect } from "react-redux";
import { getOrder } from "../../actions/creators/orders";
import Loading from "../UI/Loading/Loading";
import { prettifyCents } from "../../utils/utils";
import "./OrderDetails.css";

const OrderDetails = ({ getOrder, order: { order, loading }, match }) => {
  useEffect(() => {
    getOrder(match.params.id);
  }, [getOrder, match.params.id]);

  const displayProducts = text => {
    console.log("Display products", text);
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Products</th>
            <th scope="col">Quantity</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map(product => (
            <tr key={`order${order._id}-product-${product._id}`}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td className="order-products-price">
                {prettifyCents(product.price)}
              </td>
            </tr>
          ))}
          <tr>
            <th scope="row" colSpan="2">
              Total
            </th>
            <td className="order-total-price">{prettifyCents(order.total)}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <AdminNavBar />
      <div className="container-fluid">
        <h3 className="mt-4">{`Order ID: #${order._id}`}</h3>
        <hr />
        <div className="row">
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>Mark</td>
                  <td>Registered</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>john@hotmail.com</td>
                </tr>
              </tbody>
            </table>
            <div>
              <h3>Shipping Details</h3>
              <div className="ml-5 mt-3">
                <p>{`${order.shipping_address.street}, #${order.shipping_address.number}, ${order.shipping_address.zip}`}</p>
                <p>{`${order.shipping_address.city}, ${order.shipping_address.state}, ${order.shipping_address.country}`}</p>
              </div>
            </div>
            <h3>Billing Details</h3>
            <div className="ml-5 mt-3">
              <p>{`${order.billing_address.street}, #${order.billing_address.number}, ${order.billing_address.zip}`}</p>
              <p>{`${order.billing_address.city}, ${order.billing_address.state}, ${order.billing_address.country}`}</p>
            </div>
          </div>
          <div className="col">
            <h4>{`Order Status: ${order.status}`}</h4>
            <div className="my-4">
              <p>{`Created at: ${order.createdAt}`}</p>
              <p>{`Updated at: ${order.updatedAt}`}</p>
              {displayProducts("hey")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  order: state.orders
});

export default connect(
  mapStateToProps,
  { getOrder }
)(OrderDetails);
