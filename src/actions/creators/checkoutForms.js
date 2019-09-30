import {
  SHIPPING_FORM_VALID,
  SHIPPING_FORM_INVALID,
  BILLING_FORM_VALID,
  BILLING_FORM_INVALID
} from "../types/checkoutForms";

export const validateShippingForm = isValid => {
  return isValid
    ? { type: SHIPPING_FORM_VALID }
    : { type: SHIPPING_FORM_INVALID };
};

export const validateBillingForm = isValid => {
  return isValid
    ? { type: BILLING_FORM_VALID }
    : { type: BILLING_FORM_INVALID };
};
