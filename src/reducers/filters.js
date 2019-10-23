import * as types from "../actions/types/filters";
const initialState = {
  filtersEnabled: {
    shippableTrue: true,
    shippableFalse: true,
    availableTrue: true,
    availableFalse: false,
    priceRange: {
      enabled: false,
      min: 0,
      max: 0
    }
  },
  orderCriteria: {
    priceLTH: false,
    priceHTL: false,
    nameAZ: false,
    nameZA: false,
    stockLTH: false,
    stockHTL: false
  },
  search: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_PRODUCTS:
      return Object.assign({}, state, {
        search: action.data
      });
    case types.ORDER_BY_ENABLE_PRICE_LTH:
      return Object.assign({}, state, {
        orderCriteria: {
          ...initialState.orderCriteria,
          priceLTH: true
        }
      });

    case types.ORDER_BY_ENABLE_PRICE_HTL:
      return Object.assign({}, state, {
        orderCriteria: {
          ...initialState.orderCriteria,
          priceHTL: true
        }
      });

    case types.ORDER_BY_ENABLE_NAME_AZ:
      return Object.assign({}, state, {
        orderCriteria: {
          ...initialState.orderCriteria,
          nameAZ: true
        }
      });

    case types.ORDER_BY_ENABLE_NAME_ZA:
      return Object.assign({}, state, {
        orderCriteria: {
          ...initialState.orderCriteria,
          nameZA: true
        }
      });

    case types.ORDER_BY_ENABLE_STOCK_LTH:
      return Object.assign({}, state, {
        orderCriteria: {
          ...initialState.orderCriteria,
          stockLTH: true
        }
      });

    case types.ORDER_BY_ENABLE_STOCK_HTL:
      return Object.assign({}, state, {
        orderCriteria: {
          ...initialState.orderCriteria,
          stockHTL: true
        }
      });

    case types.ORDER_BY_CLEAR_ALL:
      return Object.assign({}, state, {
        orderCriteria: {
          ...initialState.orderCriteria
        }
      });

    case types.FILTERS_SET_SHIPPABLE_TRUE:
      return Object.assign({}, state, {
        filtersEnabled: {
          ...state.filtersEnabled,
          shippableTrue: action.enable
        }
      });

    case types.FILTERS_SET_SHIPPABLE_FALSE:
      return Object.assign({}, state, {
        filtersEnabled: {
          ...state.filtersEnabled,
          shippableFalse: action.enable
        }
      });

    case types.FILTERS_SET_AVAILABLE_TRUE:
      return Object.assign({}, state, {
        filtersEnabled: {
          ...state.filtersEnabled,
          availableTrue: action.enable
        }
      });

    case types.FILTERS_SET_AVAILABLE_FALSE:
      return Object.assign({}, state, {
        filtersEnabled: {
          ...state.filtersEnabled,
          availableFalse: action.enable
        }
      });

    case types.FILTERS_SET_PRICE_RANGE:
      return Object.assign({}, state, {
        filtersEnabled: {
          ...state.filtersEnabled,
          priceRange: {
            enabled: action.val,
            min: action.min,
            max: action.max
          }
        }
      });

    case types.CLEAR_FILTERS:
      return Object.assign({}, state, {
        filtersEnabled: {
          ...initialState.filtersEnabled
        }
      });

    case types.CLEAR_SEARCH:
      return Object.assign({}, state, {
        search: ""
      });
    default:
      return state;
  }
};
