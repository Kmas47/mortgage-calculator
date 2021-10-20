export type IAmortizationPeriod = {
  years: number;
  months: number;
};

type IPaymentFrequency = {
  label: string;
  value: number;
};

export type IPaymentPlan = {
  mortgageAmount: number;
  interestRate: number;
  amortizationPeriod: IAmortizationPeriod;
  paymentFrequency: IPaymentFrequency;
  term: number;
};
