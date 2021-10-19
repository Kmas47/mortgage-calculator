import { Grid } from "@mui/material";
import React, { useReducer } from "react";
import { IPaymentPlan } from "../@types/types";
import { BaseCard } from "../components /card/baseCard";
import { PaymentCalculator } from "../components /form/paymentCalculator";
import { PrepaymentForm } from "../components /form/prePaymentPlan";
import { PageLayout } from "../components /theme/pageLayout";
import { reducer } from "../context/reducers/reducers";
import { AMORTIZATION_PERIOD } from "../utils /constants/constants";

const initialPaymentPlan: IPaymentPlan = {
  mortgageAmount: 100000,
  interestRate: 5,
  amortizationPeriod: {
    years: 25,
    months: 0,
  },
  paymentFrequency: { label: "Weekly", value: "5" },
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
  return (
    <PageLayout>
      <Grid container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item lg={6}>
            <BaseCard
              title="payment plan"
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
        <Grid container>calc table</Grid>
      </Grid>
    </PageLayout>
  );
};
