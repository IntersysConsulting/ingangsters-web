import * as types from "../actions/types/checkout";

const initialState = {
  isSaveFormValues: false,
  formValues: null
};

export default (state = initialState, action) => {
  const { type, isSaveFormValues, formValues } = action;

  switch (type) {
    case types.DISPLAY_PAYMENT_METHODS:
      return Object.assign({}, state, {
        displayPaymentMethods: true
      });
    case types.HIDE_PAYMENT_METHODS:
      return Object.assign({}, state, {
        displayPaymentMethods: false
      });
    case types.SAVE_FORM_VALUES:
      return {
        ...state,
        isSaveFormValues: isSaveFormValues,
        formValues: formValues
      };
    default:
      return state;
  }
};
