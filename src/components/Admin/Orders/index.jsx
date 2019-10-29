import React from "react";
import OrderCard from "./OrderCard/OrderCard";
import "./Orders.css";
import { fetchOrders } from "./Connections";
import { connect } from "react-redux";
import LoadingBall from "../../UI/Loading/Loading";
import Paginator from "../../UI/Paginator/Paginator";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {
  setActiveStatusFilter,
  clearStatusFilter
} from "../../../actions/creators/adminOrders";
import { prettifyStatus } from "../../../utils/utils";

const OrdersManagement = ({
  loading,
  doneLoading,
  ordersList,
  currentPage,
  itemsPerPage,
  totalItems,
  statusList,
  statusFilter,
  dispatch
}) => {
  const reload = () => {
    fetchOrders(currentPage, statusFilter, dispatch);
  };

  if (ordersList.length === 0 && !loading && !doneLoading) {
    fetchOrders(1, statusFilter, dispatch);
  }

  if (loading && !doneLoading) {
    return <LoadingBall></LoadingBall>;
  } else {
    let cards;
    if (ordersList.length !== 0)
      cards = ordersList.map(order => (
        <OrderCard
          id={order._id}
          date={order.date}
          total={order.total}
          status={order.status}
          nextOptions={order.next_status}
          key={order._id}
          reload={reload}
        />
      ));
    else cards = <h3>No results</h3>;
    const statusDropdownOptions = statusList.map(item => {
      return (
        <Dropdown.Item
          eventKey={item}
          key={item}
          active={item === statusFilter}
          onClick={() => {
            dispatch(setActiveStatusFilter(item));
            fetchOrders(1, item, dispatch);
          }}
        >
          {prettifyStatus(item)}
        </Dropdown.Item>
      );
    });
    const dropdownTitle = statusFilter
      ? prettifyStatus(statusFilter)
      : "Filter by Status";
    return (
      <React.Fragment>
        <div
          className="d-flex flex-row justify-content-between mx-auto"
          style={{ maxWidth: "1200px", width: "100%" }}
        >
          <h3>Orders</h3>
          <DropdownButton
            title={dropdownTitle}
            id="statusOptions"
            key="statusOptions"
          >
            {statusDropdownOptions}
            <Dropdown.Item
              eventKey="CLEAR"
              key="CLEAR"
              active={statusFilter === null}
              onClick={() => {
                dispatch(clearStatusFilter());
                fetchOrders(1, null, dispatch);
              }}
            >
              All orders
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="orderCardsContainer row">{cards}</div>
        <Paginator
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          navigateFunction={k => {
            fetchOrders(k, statusFilter, dispatch);
          }}
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
  totalItems: state.adminOrders.totalItems,
  statusList: state.adminOrders.statusList,
  statusFilter: state.adminOrders.statusFilter,
  doneLoading: state.adminOrders.finishedFetch
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersManagement);
