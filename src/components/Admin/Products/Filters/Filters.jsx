import React from "react";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap";
import * as filtersActions from "../../../../actions/creators/filters";
import "./Filters.css";
import OrderDropdown from "../../../UI/Filters/OrderDropdown";
import ShippableFilter from "../../../UI/Filters/CheckBoxGroups/Shippable";
import AvailableFilter from "../../../UI/Filters/CheckBoxGroups/Available";
const Filters = ({ dispatch, refreshFunction }) => {
  return (
    <div className="filterWrapper">
      <OrderDropdown forAdmin={true} />
      <ShippableFilter />
      <AvailableFilter />
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

export default connect(
  null,
  dispatch => ({ dispatch: dispatch })
)(Filters);
