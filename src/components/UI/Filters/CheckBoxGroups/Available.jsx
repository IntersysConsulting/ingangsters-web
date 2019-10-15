import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import * as filtersActions from "../../../../actions/creators/filters";
import "../Styles.css";

const FilterCheckboxes = ({ config, dispatch }) => {
  return (
    <div>
      <h5>Available or Unavailable?</h5>
      <Form.Check
        type="checkbox"
        label="Available Products"
        checked={config.filtersEnabled.availableTrue}
        onClick={() => {
          dispatch(
            filtersActions.setAvailableTrueFilter(
              !config.filtersEnabled.availableTrue
            )
          );
        }}
      />
      <Form.Check
        type="checkbox"
        label="Unavailable Products"
        checked={config.filtersEnabled.availableFalse}
        onClick={() => {
          dispatch(
            filtersActions.setAvailableFalseFilter(
              !config.filtersEnabled.availableFalse
            )
          );
        }}
      />
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
)(FilterCheckboxes);
