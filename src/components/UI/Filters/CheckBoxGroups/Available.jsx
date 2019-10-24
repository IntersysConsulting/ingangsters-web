import React from "react";
import { connect } from "react-redux";
import * as filtersActions from "../../../../actions/creators/filters";
import "../Styles.css";

const FilterCheckboxes = ({ config, dispatch, applyFilter }) => {
  return (
    <div className="mt-5 mt-sm-3">
      <h6>Products Availability</h6>
      <div className="form-check custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="available-products"
          checked={config.filtersEnabled.availableTrue}
          readOnly
          onClick={() => {
            dispatch(
              filtersActions.setAvailableTrueFilter(
                !config.filtersEnabled.availableTrue
              )
            );
            applyFilter();
          }}
        />
        <label
          type="checkbox"
          className="form-check-label custom-control-label"
          htmlFor="available-products"
        >
          Availables
        </label>
      </div>
      <div className="form-check custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="unavailable-products"
          checked={config.filtersEnabled.availableFalse}
          readOnly
          onClick={() => {
            dispatch(
              filtersActions.setAvailableFalseFilter(
                !config.filtersEnabled.availableFalse
              )
            );
            applyFilter();
          }}
        />
        <label
          type="checkbox"
          className="form-check-label custom-control-label"
          htmlFor="unavailable-products"
        >
          Unavailables
        </label>
      </div>
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
  dispatch => ({ dispatch })
)(FilterCheckboxes);
