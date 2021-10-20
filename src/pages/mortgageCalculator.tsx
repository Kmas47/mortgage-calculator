import { Grid } from "@mui/material";
import React, { useReducer } from "react";
import { IPaymentPlan } from "../@types/types";
import { BaseCard } from "../components /card/baseCard";
import { PaymentCalculator } from "../components /form/paymentCalculator";
import { PrepaymentForm } from "../components /form/prePaymentPlan";
import { MortgageCalculationTable } from "../components /table/calculationTable";
import { PageLayout } from "../components /theme/pageLayout";
import { reducer } from "../context/reducers/reducers";
import { AMORTIZATION_PERIOD } from "../utils /constants/constants";
import {
  numAmortizationPeriod,
  paymentsCalculation,
} from "../utils /helpers/calculationHelpers";

const initialPaymentPlan: IPaymentPlan = {
  mortgageAmount: 100000,
  interestRate: 5,
  amortizationPeriod: {
    years: 25,
    months: 0,
  },
  paymentFrequency: { label: "Weekly", value: 52 },
  term: 5,
};

const initialPrePayment = {
  prePaymentAmount: 0,
  prePaymentFrequency: { label: "One time", value: 1 },
  prePaymentStart: 1,
};

export const MortgageCalculator = () => {
  // @ts-ignore
  const [paymentPlan, dispatchPaymentPlan] = useReducer(
    reducer,
    initialPaymentPlan
  );
  // @ts-ignore
  const [prePayment, dispatchPrepayment] = useReducer(
    reducer,
    initialPrePayment
  );

  const handleChange = (type, dispatch) => (e) => {
    dispatch({
      type: type,
      payload: e.target.value,
    });
  };
  const handleSelect = (type, dispatch) => (e, v) => {
    const payload =
      type === AMORTIZATION_PERIOD
        ? e.target
        : {
            label: v.props.children,
            value: e.target.value,
          };
    dispatch({
      type: type,
      payload,
    });
  };

  const term = paymentPlan.paymentFrequency.value * paymentPlan.term;

  const totalPayments: number = numAmortizationPeriod(
    paymentPlan.amortizationPeriod,
    paymentPlan.paymentFrequency.value
  );
  const downPayment =
    parseInt(prePayment.prePaymentAmount) *
    prePayment.prePaymentFrequency.value;
  const mortgageAmount = parseInt(paymentPlan.mortgageAmount);
  const principle = mortgageAmount - downPayment;
  const roi = parseInt(paymentPlan.interestRate) / 100;
  const paymentFrequency = paymentPlan.paymentFrequency.value;
  const payments = paymentsCalculation(roi, paymentFrequency, principle);
  const totalAmountPayable = payments * totalPayments;
  const totalInterestPayment = totalAmountPayable - principle;
  const termPrePayment = downPayment / paymentPlan.term;
  const termTotalPayableAmount = payments * term;

  return (
    <PageLayout>
      <Grid container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item lg={6}>
            <BaseCard
              title="Payment Plan"
              titleDirection="left"
              cardWidth={600}
              cardContent={() => (
                <PaymentCalculator
                  paymentPlan={paymentPlan}
                  dispatch={dispatchPaymentPlan}
                  handleChange={handleChange}
                  handleSelect={handleSelect}
                />
              )}
            />
          </Grid>
          <Grid item lg={6}>
            <BaseCard
              title="Prepayment plan"
              titleDirection="left"
              cardWidth={600}
              cardContent={() => (
                <PrepaymentForm
                  paymentPlan={paymentPlan}
                  prePayment={prePayment}
                  dispatch={dispatchPrepayment}
                  handleSelect={handleSelect}
                  handleChange={handleChange}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ py: 4 }}>
          <BaseCard
            title="Calculation Summary"
            titleDirection="center"
            cardWidth={"100%"}
            cardContent={() => (
              <MortgageCalculationTable
                term={term}
                totalPayments={totalPayments}
                payments={payments}
                termPrePayment={termPrePayment}
                downPayment={downPayment}
                principle={principle}
                totalInterestPayment={totalInterestPayment}
                termTotalPayableAmount={termTotalPayableAmount}
                totalAmountPayable={totalAmountPayable}
              />
            )}
          />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
