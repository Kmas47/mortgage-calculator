import { IAmortizationPeriod } from "../../@types/types";
import { numOfMonths } from "../constants/constants";

export const numAmortizationPeriod = (
  amortizationPeriod: IAmortizationPeriod,
  paymentFrequency: number
) => {
  if (amortizationPeriod.months === 0) {
    return paymentFrequency * amortizationPeriod.years;
  } else {
    return Math.floor(
      paymentFrequency * amortizationPeriod.years +
        paymentFrequency / (numOfMonths - amortizationPeriod.months)
    );
  }
};

export const paymentsCalculation = (roi: number, paymentFrequency: number, principle: number) => {
  const value1 = roi / paymentFrequency;
  const v = 1 + value1;
  const value2 = Math.pow(v, 360);
  const value3 = Math.pow(v, 360) - 1;
  const payment = (principle * value1 * value2) / value3;
  return payment;
};
