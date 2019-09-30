import {
  SHIPPING_FORM_VALID,
  SHIPPING_FORM_INVALID,
  BILLING_FORM_VALID,
  BILLING_FORM_INVALID
} from "../actions/types/checkoutForms";

const initialState = {
  isShippingFormValid: false,
  isBillingFormValid: false
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SHIPPING_FORM_VALID: {
      return {
        ...state,
        isShippingFormValid: true
      };
    }
    case SHIPPING_FORM_INVALID: {
      return {
        ...state,
        isShippingFormValid: false
      };
    }
    case BILLING_FORM_VALID: {
      return {
        ...state,
        isBillingFormValid: true
      };
    }
    case BILLING_FORM_INVALID: {
      return {
        ...state,
        isBillingFormValid: false
      };
    }

    default:
      return state;
  }
};
