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
  switch (action.type) {
    case MORTGAGE_AMOUNT:
    case INTEREST_RATE:
    case TERM:
    case PRE_PAYMENT_AMOUNT:
    case PRE_PAYMENT_FREQUENCY:
    case PRE_PAYMENT_START:
      return { ...state, [action.type]: action.payload };
    case PAYMENT_FREQUENCY:
      return {
        ...state,
        [action.type]: {
          label: action.payload.label,
          value: action.payload.value,
        },
      };
    case AMORTIZATION_PERIOD:
      return {
        ...state,
        [action.type]: {
          ...state?.[action.type],
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
