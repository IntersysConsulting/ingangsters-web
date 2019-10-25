import React from "react";
import OrderCard from "./OrderCard/OrderCard";
import "./Orders.css";
import { fetchOrders } from "./Connections";
import { connect } from "react-redux";
import LoadingBall from "../../UI/Loading/Loading";
import Paginator from "../../UI/Paginator/Paginator";
const OrdersManagement = ({
  loading,
  ordersList,
  currentPage,
  itemsPerPage,
  totalItems,
  fetchOrders
}) => {
  if (ordersList.length === 0 && !loading) {
    fetchOrders(1);
  }
  if (loading) {
    return <LoadingBall></LoadingBall>;
  } else {
    const cards = ordersList.map(order => (
      <OrderCard
        id={order._id}
        date={order.date}
        total={order.total}
        status={order.status}
        nextOptions={order.next_status}
        key={order._id}
      />
    ));
    return (
      <React.Fragment>
        <div
          className="d-flex flex-row justify-content-between mx-auto"
          style={{ maxWidth: "1200px", width: "100%" }}
        >
          <h3>Orders</h3>
          <h4>Filter by...</h4>
        </div>
        <div className="orderCardsContainer row">{cards}</div>
        <Paginator
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          navigateFunction={fetchOrders}
        />
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  loading: state.adminOrders.fetching,
  ordersList: state.adminOrders.list,
  currentPage: state.adminOrders.currentPage,
  itemsPerPage: state.adminOrders.itemsPerPage,
  totalItems: state.adminOrders.totalItems
});

const mapDispatchToProps = { fetchOrders };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersManagement);
