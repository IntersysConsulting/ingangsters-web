import React from "react";
import { connect } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import * as filtersActions from "../../../actions/creators/filters";
import "./Styles.css";

const OrderDropdown = ({
  config,
  dispatch,
  forAdmin = true,
  orderProducts = () => {}
}) => {
  let orderByDropdownLabel;
  if (config.orderCriteria.nameAZ) orderByDropdownLabel = "Order by Name (A-Z)";
  else if (config.orderCriteria.nameZA)
    orderByDropdownLabel = "Order by Name (Z - A)";
  else if (config.orderCriteria.priceLTH)
    orderByDropdownLabel = "Order by lower prices";
  else if (config.orderCriteria.priceHTL)
    orderByDropdownLabel = "Order by higher prices";
  else if (config.orderCriteria.stockLTH)
    orderByDropdownLabel = "Order by lower stock";
  else if (config.orderCriteria.stockHTL)
    orderByDropdownLabel = "Order by higher stock";
  else orderByDropdownLabel = "Sort by";

  let orderByStock = null;
  if (forAdmin)
    orderByStock = (
      <React.Fragment>
        <Dropdown.Divider />
        <Dropdown.Header>Sort by stock</Dropdown.Header>
        <Dropdown.Item
          eventKey="stockLTH"
          active={config.orderCriteria.stockLTH}
          onClick={() => {
            dispatch(filtersActions.enableOrderByStockLTH());
            orderProducts();
          }}
        >
          Lower to higher
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="stockHTL"
          active={config.orderCriteria.stockHTL}
          onClick={() => {
            dispatch(filtersActions.enableOrderByStockHTL());
            orderProducts();
          }}
        >
          Higher to lower
        </Dropdown.Item>
      </React.Fragment>
    );
  return (
    <DropdownButton
      title={orderByDropdownLabel}
      id="sortingRules"
      key="sortingRules"
      className="filtersDropdown"
    >
      <Dropdown.Header>Sort by name</Dropdown.Header>
      <Dropdown.Item
        eventKey="nameAZ"
        active={config.orderCriteria.nameAZ}
        onClick={() => {
          dispatch(filtersActions.enableOrderByNameAZ());
          orderProducts();
        }}
      >
        A to Z
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="nameZA"
        active={config.orderCriteria.nameZA}
        onClick={() => {
          dispatch(filtersActions.enableOrderByNameZA());
          orderProducts();
        }}
      >
        Z to A
      </Dropdown.Item>

      <Dropdown.Divider />
      <Dropdown.Header>Sort by price</Dropdown.Header>
      <Dropdown.Item
        eventKey="priceLTH"
        active={config.orderCriteria.priceLTH}
        onClick={() => {
          dispatch(filtersActions.enableOrderByPriceLTH());
          orderProducts();
        }}
      >
        Lower to higher
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="priceHTL"
        active={config.orderCriteria.priceHTL}
        onClick={() => {
          dispatch(filtersActions.enableOrderByPriceHTL());
          orderProducts();
        }}
      >
        Higher to lower
      </Dropdown.Item>
      {orderByStock}
    </DropdownButton>
  );
};

function mapStateToProps(state) {
  return {
    config: { ...state.filters },
    currentPage: state.adminProducts.currentPage
  };
}

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch: dispatch })
)(OrderDropdown);
