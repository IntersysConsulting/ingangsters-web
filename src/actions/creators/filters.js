import * as types from "../types/filters";
import store from "../../store";

export const enableOrderByPriceLTH = () => ({
  type: types.ORDER_BY_ENABLE_PRICE_LTH
});

export const enableOrderByPriceHTL = () => ({
  type: types.ORDER_BY_ENABLE_PRICE_HTL
});

export const enableOrderByNameAZ = () => ({
  type: types.ORDER_BY_ENABLE_NAME_AZ
});

export const enableOrderByNameZA = () => ({
  type: types.ORDER_BY_ENABLE_NAME_ZA
});

export const enableOrderByStockLTH = () => ({
  type: types.ORDER_BY_ENABLE_STOCK_LTH
});

export const enableOrderByStockHTL = () => ({
  type: types.ORDER_BY_ENABLE_STOCK_HTL
});

export const disableOrderBy = () => ({
  type: types.ORDER_BY_CLEAR_ALL
});

export const setShippableTrueFilter = value => ({
  type: types.FILTERS_SET_SHIPPABLE_TRUE,
  enable: value
});

export const setShippableFalseFilter = value => ({
  type: types.FILTERS_SET_SHIPPABLE_FALSE,
  enable: value
});

export const setAvailableTrueFilter = value => ({
  type: types.FILTERS_SET_AVAILABLE_TRUE,
  enable: value
});

export const setAvailableFalseFilter = value => ({
  type: types.FILTERS_SET_AVAILABLE_FALSE,
  enable: value
});

export const setPriceRangeFilter = (val, min, max) => ({
  type: types.FILTERS_SET_PRICE_RANGE,
  data: {
    enabled: val,
    min: min,
    max: max
  }
});

export const clearFilters = () => ({
  type: types.FILTERS_CLEAR_FILTERS
});

export const setSearch = search => ({
  type: types.SEARCH_PRODUCTS,
  data: search
});

export function getFilterParams() {
  const filtersConfig = store.getState().filters.filtersEnabled;
  const orderConfig = store.getState().filters.orderCriteria;
  const adminProductSearch = store.getState().filters.search;
  const params = {
    sortPrice: "NONE",
    sortName: "NONE",
    sortStock: "NONE",
    shippable: "NONE",
    available: "NONE",
    priceRange: "NONE",
    search: "NONE"
  };

  if (adminProductSearch !== "") params.search = adminProductSearch;
  else delete params.search;

  if (orderConfig.priceLTH) params.sortPrice = "ASCENDING";
  else if (orderConfig.priceHTL) params.sortPrice = "DESCENDING";

  if (orderConfig.nameAZ) params.sortName = "ASCENDING";
  else if (orderConfig.nameZA) params.sortName = "DESCENDING";

  if (orderConfig.stockLTH) params.sortStock = "ASCENDING";
  else if (orderConfig.stockHTL) params.sortStock = "DESCENDING";

  if (filtersConfig.availableTrue && filtersConfig.availableFalse)
    delete params.available;
  else if (filtersConfig.availableTrue) params.available = "TRUE";
  else if (filtersConfig.availableFalse) params.available = "FALSE";

  if (filtersConfig.shippableTrue && filtersConfig.shippableFalse)
    delete params.shippable;
  else if (filtersConfig.shippableTrue) params.shippable = "TRUE";
  else if (filtersConfig.shippableFalse) params.shippable = "FALSE";

  if (filtersConfig.priceRange.enabled) {
    params.min = filtersConfig.priceRange.min;
    params.max = filtersConfig.priceRange.max;
  }
  return params;
}
