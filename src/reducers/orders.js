import {
  GET_ORDER_BY_ID,
  ORDER_NOT_FOUND,
  CREATE_ORDER
} from "../actions/types/orders";

const initialState = {
  order_id: null,
  orders: [],
  order: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER:
      return {
        order_id: action.order_id
      };
    case GET_ORDER_BY_ID:
      return {
        ...state,
        order: payload.data,
        loading: false
      };
    case ORDER_NOT_FOUND:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
