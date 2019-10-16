import * as types from "../types/checkout";

export function displayPaymentMethods(value) {
  return value
    ? { type: types.DISPLAY_PAYMENT_METHODS }
    : { type: types.HIDE_PAYMENT_METHODS };
}

export const saveFormValues = (formValues) => {
  return {
    type: types.SAVE_FORM_VALUES,
    formValues: formValues
  };
};
