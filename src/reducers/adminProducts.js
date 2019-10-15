import * as types from "../actions/types/adminProducts";

const initialState = {
  list: [],
  fetching: false,
  finishedFetching: false,
  totalItems: 0,
  itemsPerPage: 0,
  currentPage: 0,
  filtersStatus: {
    priceLTH: false,
    priceHTL: false,
    nameAZ: false,
    nameZA: false,
    shippableTrue: false,
    shippableFalse: false,
    stockLTH: false,
    stockHTL: false,
    availableTrue: true,
    availableFalse: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCTS:
      return Object.assign({}, state, { list: action.newProductList });

    case types.FETCHING_PRODUCTS:
      return Object.assign({}, state, { fetching: true });

    case types.FINISHED_FETCHING_PRODUCTS:
      return Object.assign({}, state, {
        fetching: false,
        finishedFetching: true,
        totalItems: action.totalItems,
        itemsPerPage: action.itemsPerPage,
        currentPage: action.currentPage
      });

    case types.UPADTE_PAGINATOR:
      return Object.assign({}, state, {
        totalItems: action.totalItems,
        itemsPerPage: action.itemsPerPage,
        currentPage: action.currentPage
      });

    case types.ADMIN_GET_SEARCH_PRODUCTS:
      return Object.assign({}, state, {
        list: action.payload,
        totalItems: action.payload.length,
        currentPage: 1
      });

    case types.ADMIN_ENABLE_PRICE_LTH:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          priceLTH: true,
          priceHTL: false
        }
      });

    case types.ADMIN_ENABLE_PRICE_HTL:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          priceLTH: false,
          priceHTL: true
        }
      });

    case types.ADMIN_DISABLE_PRICE:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          priceLTH: false,
          priceHTL: false
        }
      });

    case types.ADMIN_ENABLE_NAME_AZ:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          nameAZ: true,
          nameZA: false
        }
      });

    case types.ADMIN_ENABLE_NAME_ZA:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          nameAZ: false,
          nameZA: true
        }
      });

    case types.ADMIN_DISABLE_NAME:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          nameAZ: false,
          nameZA: false
        }
      });

    case types.ADMIN_ENABLE_SHIPPABLE_TRUE:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          shippableFalse: false,
          shippableTrue: true
        }
      });

    case types.ADMIN_ENABLE_SHIPPABLE_FALSE:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          shippableFalse: true,
          shippableTrue: false
        }
      });

    case types.ADMIN_DISABLE_SHIPPABLE:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          shippableFalse: false,
          shippableTrue: false
        }
      });

    case types.ADMIN_ENABLE_STOCK_LTH:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          stockLTH: true,
          stockHTL: false
        }
      });

    case types.ADMIN_ENABLE_STOCK_HTL:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          stockLTH: false,
          stockHTL: true
        }
      });

    case types.ADMIN_DISABLE_STOCK:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          stockLTH: false,
          stockHTL: false
        }
      });

    case types.ADMIN_ENABLE_AVAILABLE_TRUE:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          availableTrue: true,
          availableFalse: false
        }
      });

    case types.ADMIN_ENABLE_AVAILABLE_FALSE:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          availableTrue: false,
          availableFalse: true
        }
      });

    case types.ADMIN_DISABLE_AVAILABLE_FILTER:
      return Object.assign({}, state, {
        filtersStatus: {
          ...state.filtersStatus,
          availableTrue: false,
          availableFalse: false
        }
      });

    case types.ADMIN_CLEAR_FILTERS:
      return Object.assign({}, state, {
        filtersStatus: {
          ...initialState.filtersStatus
        }
      });

    default:
      return state;
  }
};
