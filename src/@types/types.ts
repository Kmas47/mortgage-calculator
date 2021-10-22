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

export type ICalculationTableProps = {
  term: number;
  totalPayments: number;
  payments: number;
  termPrePayment: number;
  downPayment: number;
  termPrincipalAmount: number;
  principal: number;
  termInterestPayment: number;
  totalInterestPayment: number;
  termTotalPayableAmount: number;
  totalAmountPayable: number;
};

export type IThemeContextType = {
  darkMode: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};