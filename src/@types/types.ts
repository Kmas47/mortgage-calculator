type IAmortizationPeriod = {
  years: number;
  months: number;
};

type IPaymentFrequency = {
  label: string;
  value: string;
};

export type IPaymentPlan = {
  mortgageAmount: number;
  interestRate: number;
  amortizationPeriod: IAmortizationPeriod;
  paymentFrequency: IPaymentFrequency;
  term: number;
};
