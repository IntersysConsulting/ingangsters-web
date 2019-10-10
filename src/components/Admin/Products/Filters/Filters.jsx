import React from "react";
import { connect } from "react-redux";
import {
  DropdownButton,
  Dropdown,
  Button,
  ButtonToolbar
} from "react-bootstrap";
import * as filtersActions from "../../../../actions/creators/filters";
import "./Filters.css";
const Filters = ({ config, dispatch, refreshFunction }) => {
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
  else orderByDropdownLabel = "Select order criterium";
  return (
    <div className="filterWrapper">
      <DropdownButton
        title={orderByDropdownLabel}
        id="sortingRules"
        key="sortingRules"
      >
        <Dropdown.Header>Sort by name</Dropdown.Header>
        <Dropdown.Item
          eventKey="nameAZ"
          active={config.orderCriteria.nameAZ}
          onClick={() => {
            dispatch(filtersActions.enableOrderByNameAZ());
          }}
        >
          A to Z
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="nameZA"
          active={config.orderCriteria.nameZA}
          onClick={() => {
            dispatch(filtersActions.enableOrderByNameZA());
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
          }}
        >
          Lower to higher
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="priceHTL"
          active={config.orderCriteria.priceHTL}
          onClick={() => {
            dispatch(filtersActions.enableOrderByPriceHTL());
          }}
        >
          Higher to lower
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Header>Sort by stock</Dropdown.Header>
        <Dropdown.Item
          eventKey="stockLTH"
          active={config.orderCriteria.stockLTH}
          onClick={() => {
            dispatch(filtersActions.enableOrderByStockLTH());
          }}
        >
          Lower to higher
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="stockHTL"
          active={config.orderCriteria.stockHTL}
          onClick={() => {
            dispatch(filtersActions.enableOrderByStockHTL());
          }}
        >
          Higher to lower
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton title="Filters" id="filterRules" key="filterRules">
        <Dropdown.Header>Physical or Digital?</Dropdown.Header>
        <Dropdown.Item
          eventKey="shippableFalse"
          active={config.filtersEnabled.shippableFalse}
          onClick={() => {
            dispatch(
              filtersActions.setShippableFalseFilter(
                !config.filtersEnabled.shippableFalse
              )
            );
          }}
        >
          Digital products
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="shippableTrue"
          active={config.filtersEnabled.shippableTrue}
          onClick={() => {
            dispatch(
              filtersActions.setShippableTrueFilter(
                !config.filtersEnabled.shippableTrue
              )
            );
          }}
        >
          Physical products
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Header>Available or Unavailable?</Dropdown.Header>
        <Dropdown.Item
          eventKey="availableTrue"
          active={config.filtersEnabled.availableTrue}
          onClick={() => {
            dispatch(
              filtersActions.setAvailableTrueFilter(
                !config.filtersEnabled.availableTrue
              )
            );
          }}
        >
          Available products
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="availableFalse"
          active={config.filtersEnabled.availableFalse}
          onClick={() => {
            dispatch(
              filtersActions.setAvailableFalseFilter(
                !config.filtersEnabled.availableFalse
              )
            );
          }}
        >
          Unavailable products
        </Dropdown.Item>
      </DropdownButton>
      <ButtonToolbar>
        <Button
          variant="success"
          size="sm"
          onClick={() => {
            refreshFunction();
          }}
        >
          Apply
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => {
            dispatch(filtersActions.clearFilters());
            dispatch(filtersActions.disableOrderBy());
            refreshFunction();
          }}
        >
          Clear
        </Button>
      </ButtonToolbar>
    </div>
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
)(Filters);
