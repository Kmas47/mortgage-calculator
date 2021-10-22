import {
  AMORTIZATION_PERIOD,
  INTEREST_RATE,
  MORTGAGE_AMOUNT,
  PAYMENT_FREQUENCY,
  PRE_PAYMENT_AMOUNT,
  PRE_PAYMENT_FREQUENCY,
  PRE_PAYMENT_START,
  TERM,
} from "../../utils /constants/constants";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MORTGAGE_AMOUNT:
    case INTEREST_RATE:
    case TERM:
    case PRE_PAYMENT_AMOUNT:
    case PRE_PAYMENT_FREQUENCY:
    case PRE_PAYMENT_START:
      return { ...state, [type]: payload };
    case PAYMENT_FREQUENCY:
      return {
        ...state,
        [type]: {
          label: payload.label,
          value: payload.value,
        },
      };
    case AMORTIZATION_PERIOD:
      return {
        ...state,
        [type]: {
          ...state?.[type],
          [payload.name]: payload.value,
        },
      };
    default:
      return state;
  }
};
