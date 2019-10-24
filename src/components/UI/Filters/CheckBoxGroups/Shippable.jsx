import React from "react";
import { connect } from "react-redux";
import * as filtersActions from "../../../../actions/creators/filters";
import "../Styles.css";

const FilterCheckboxes = ({ config, dispatch, applyFilter }) => {
  return (
    <div>
      <h6>Physical or Digital?</h6>
      <div className="form-check custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="digital-products"
          readOnly
          checked={config.filtersEnabled.shippableFalse}
          onClick={() => {
            dispatch(
              filtersActions.setShippableFalseFilter(
                !config.filtersEnabled.shippableFalse
              )
            );
            applyFilter();
          }}
        />
        <label
          type="checkbox"
          className="form-check-label custom-control-label"
          htmlFor="digital-products"
        >
          Digital Products
        </label>
      </div>

      <div className="form-check custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="physical-products"
          checked={config.filtersEnabled.shippableTrue}
          readOnly
          onClick={() => {
            dispatch(
              filtersActions.setShippableTrueFilter(
                !config.filtersEnabled.shippableTrue
              )
            );
            applyFilter();
          }}
        />
        <label
          type="checkbox"
          className="form-check-label custom-control-label"
          htmlFor="physical-products"
        >
          Physical Products
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
