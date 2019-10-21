import React from "react";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap";
import * as filtersActions from "../../../../actions/creators/filters";
import ShippableFilter from "../../../UI/Filters/CheckBoxGroups/Shippable";
import AvailableFilter from "../../../UI/Filters/CheckBoxGroups/Available";
const Filters = ({ dispatch, applyFilters }) => {
  return (
    <div>
      <ShippableFilter applyFilter={applyFilters} />
      <AvailableFilter applyFilter={applyFilters} />
      <ButtonToolbar className="justify-content-center">
        <Button
          size="sm"
          className="mt-4 clear-filters-btn"
          onClick={() => {
            dispatch(filtersActions.clearFilters());
            dispatch(filtersActions.disableOrderBy());
            applyFilters();
          }}
        >
          Remove filters
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({ dispatch })
)(Filters);
