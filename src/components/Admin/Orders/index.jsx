import React from "react";
import OrderCard from "./OrderCard/OrderCard";
import "./Orders.css";

const OrdersManagement = () => {
  return (
    <React.Fragment>
      <div
        className="d-flex flex-row justify-content-between mx-auto"
        style={{ maxWidth: "1200px", width: "100%" }}
      >
        <h3>Orders</h3>
        <h4>Filter by...</h4>
      </div>
      <div className="orderCardsContainer">
        <OrderCard
          id="5da9f7221a13911d28c8a415"
          date="30/10/2019"
          total={350000}
          status="AWAITING_FULFILLMENT"
          nextOptions={["AWAITING_SHIPMENT", "SHIPPED", "COMPLETED"]}
        />

        <OrderCard
          id="5da9f7221a13911d28c8a415"
          date="30/10/2019"
          total={350000}
          status="AWAITING_FULFILLMENT"
          nextOptions={["AWAITING_SHIPMENT", "SHIPPED", "COMPLETED"]}
        />

        <OrderCard
          id="5da9f7221a13911d28c8a415"
          date="30/10/2019"
          total={350000}
          status="AWAITING_FULFILLMENT"
          nextOptions={["AWAITING_SHIPMENT", "SHIPPED", "COMPLETED"]}
        />

        <OrderCard
          id="5da9f7221a13911d28c8a415"
          date="30/10/2019"
          total={350000}
          status="AWAITING_FULFILLMENT"
          nextOptions={["AWAITING_SHIPMENT", "SHIPPED", "COMPLETED"]}
        />
      </div>
    </React.Fragment>
  );
};

export default OrdersManagement;
