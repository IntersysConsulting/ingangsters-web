import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import * as filtersActions from "../../../../actions/creators/filters";
import "../Styles.css";

const FilterCheckboxes = ({ config, dispatch, forAdmin }) => {
  return (
    <div>
      <h5>Physical or Digital?</h5>
      <Form.Check
        type="checkbox"
        label="Digital Products"
        checked={config.filtersEnabled.shippableFalse}
        onClick={() => {
          dispatch(
            filtersActions.setShippableFalseFilter(
              !config.filtersEnabled.shippableFalse
            )
          );
        }}
      />
      <Form.Check
        type="checkbox"
        label="Physical Products"
        checked={config.filtersEnabled.shippableTrue}
        onClick={() => {
          dispatch(
            filtersActions.setShippableTrueFilter(
              !config.filtersEnabled.shippableTrue
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
