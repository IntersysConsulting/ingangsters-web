import React from "react";
import { connect } from "react-redux";
import {
  DropdownButton,
  Dropdown,
  Button,
  ButtonToolbar
} from "react-bootstrap";
import * as adminProductsActions from "../../../../actions/creators/adminProducts";
import { fetchProducts } from "../../../../actions/creators/adminProducts";
import "./Filters.css";
const Filters = ({ filtersStatus, filtersActions, dispatch, currentPage }) => {
  return (
    <div className="filterWrapper">
      <DropdownButton
        title="Order by name"
        id="nameSortingCriterium"
        key="nameSortingCriterium"
      >
        <Dropdown.Item
          eventKey="nameAZ"
          active={filtersStatus.nameAZ}
          onClick={filtersActions.enableNameAZ}
        >
          A to Z
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="nameZA"
          active={filtersStatus.nameZA}
          onClick={filtersActions.enableNameZA}
        >
          Z to A
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="clearName"
          active={!filtersStatus.nameZA && !filtersStatus.nameAZ}
          onClick={filtersActions.disableName}
        >
          Skip
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        title="Order by price"
        id="priceSortingCriterium"
        key="priceSortingCriterium"
      >
        <Dropdown.Item
          eventKey="priceLTH"
          active={filtersStatus.priceLTH}
          onClick={filtersActions.enablePriceLTH}
        >
          Lower to higher
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="priceHTL"
          active={filtersStatus.priceHTL}
          onClick={filtersActions.enablePriceHTL}
        >
          Higher to lower
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="clearPrice"
          active={!filtersStatus.priceHTL && !filtersStatus.priceLTH}
          onClick={filtersActions.disablePrice}
        >
          Skip
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        title="Order by stock"
        id="stockSortingCriterium"
        key="stockSortingCriterium"
      >
        <Dropdown.Item
          eventKey="stockLTH"
          active={filtersStatus.stockLTH}
          onClick={filtersActions.enableStockLTH}
        >
          Lower to higher
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="stockHTL"
          active={filtersStatus.stockHTL}
          onClick={filtersActions.enableStockHTL}
        >
          Higher to lower
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="clearStock"
          active={!filtersStatus.stockLTH && !filtersStatus.stockHTL}
          onClick={filtersActions.disableStock}
        >
          Skip
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        title="Filter digital"
        id="shippableFilterCriterium"
        key="shippableFilterCriterium"
      >
        <Dropdown.Item
          eventKey="shippableFalse"
          active={filtersStatus.shippableFalse}
          onClick={filtersActions.enableShippableFalse}
        >
          Only digital
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="shippableTrue"
          active={filtersStatus.shippableTrue}
          onClick={filtersActions.enableShippableTrue}
        >
          Only physical
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="disableShippable"
          active={!filtersStatus.shippableFalse && !filtersStatus.shippableTrue}
          onClick={filtersActions.disableShippable}
        >
          Both
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        title="Filter availability"
        id="availableFilterCriterium"
        key="availableFilterCriterium"
      >
        <Dropdown.Item
          eventKey="availableTrue"
          active={filtersStatus.availableTrue}
          onClick={filtersActions.enableAvailableTrue}
        >
          Only available
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="availableFalse"
          active={filtersStatus.availableFalse}
          onClick={filtersActions.enableAvailableFalse}
        >
          Only unavailable
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="clearAvailable"
          active={!filtersStatus.availableTrue && !filtersStatus.availableFalse}
          onClick={filtersActions.disableAvailable}
        >
          Both
        </Dropdown.Item>
      </DropdownButton>
      <ButtonToolbar>
        <Button
          variant="success"
          size="sm"
          onClick={() => {
            fetchProducts(currentPage)(dispatch);
          }}
        >
          Apply
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => {
            filtersActions.clearFilters();
            fetchProducts(currentPage)(dispatch);
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
    filtersStatus: { ...state.adminProducts.filtersStatus },
    currentPage: state.adminProducts.currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filtersActions: {
      enablePriceLTH() {
        dispatch(adminProductsActions.enablePriceLTHFilter());
      },
      enablePriceHTL() {
        dispatch(adminProductsActions.enablePriceHTLFilter());
      },
      disablePrice() {
        dispatch(adminProductsActions.disablePriceFilter());
      },
      enableNameAZ() {
        dispatch(adminProductsActions.enableNameAZFilter());
      },
      enableNameZA() {
        dispatch(adminProductsActions.enableNameZAFilter());
      },
      disableName() {
        dispatch(adminProductsActions.disnableNameFilter());
      },
      enableStockLTH() {
        dispatch(adminProductsActions.enableStockLTHFilter());
      },
      enableStockHTL() {
        dispatch(adminProductsActions.enableStockHTLFilter());
      },
      disableStock() {
        dispatch(adminProductsActions.disableStockFilter());
      },
      enableShippableTrue() {
        dispatch(adminProductsActions.enableShippableTrueFilter());
      },
      enableShippableFalse() {
        dispatch(adminProductsActions.enableShippableFalseFilter());
      },
      disableShippable() {
        dispatch(adminProductsActions.disableShippableFilter());
      },
      enableAvailableTrue() {
        dispatch(adminProductsActions.enableAvailableTrueFilter());
      },
      enableAvailableFalse() {
        dispatch(adminProductsActions.enableAvailableFalseFilter());
      },
      disableAvailable() {
        dispatch(adminProductsActions.disableAvailableFilter());
      },
      clearFilters() {
        dispatch(adminProductsActions.clearFilters());
      }
    },
    dispatch: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
