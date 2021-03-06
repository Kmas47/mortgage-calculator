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

export const paymentsCalculation = (
  roi: number,
  paymentFrequency: number,
  principal: number,
  totalPayments: number
) => {
  const value1 = roi / paymentFrequency;
  const v = 1 + value1;
  const value2 = Math.pow(v, totalPayments);
  const value3 = Math.pow(v, totalPayments) - 1;
  const payment = (principal * value1 * value2) / value3;
  return payment;
};

export const calculateDownPayment = (
  prePaymentAmount: number,
  prePaymentFrequency: number
) => {
  return prePaymentAmount * prePaymentFrequency;
};

export const calculatePrincipal = (
  mortgageAmount: number,
  downPayment: number
) => {
  return mortgageAmount - downPayment;
};

export const calculateRoi = (interestRate: number) => {
  return interestRate / 100;
};

export const calculateTotalAmountPayable = (
  payments: number,
  totalPayments: number
) => {
  return payments * totalPayments;
};

export const calculateTotalInterestPayment = (
  totalAmountPayable: number,
  principal: number
) => {
  return totalAmountPayable - principal;
};

export const calculateTermPrePayment = (
  prePaymentFrequency: number,
  downPayment: number,
  term: number,
  paymentFrequency: number
) => {
  const value =
    prePaymentFrequency === 1
      ? downPayment
      : downPayment / (term / paymentFrequency);

  return value;
};

export const calculateTermTotalPayableAmount = (
  payments: number,
  term: number
) => {
  return payments * term;
};

export const calculateTermInterestPayment = (
  term: number,
  totalInterestPayment: number,
  totalPayments: number
) => {
  return (term * totalInterestPayment) / totalPayments;
};

export const calculateTermPrincipalAmount = (
  termTotalPayableAmount: number,
  termInterestPayment: number
) => {
  return termTotalPayableAmount - termInterestPayment;
};
