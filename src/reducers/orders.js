import * as types from "../actions/types/orders";

const initialState = {
  order_id: null
};

export default function(currentState = initialState, action) {
  switch (action.type) {
    case types.CREATE_ORDER:
      return {
        order_id: action.order_id
      };

    default:
      return currentState;
  }
}
