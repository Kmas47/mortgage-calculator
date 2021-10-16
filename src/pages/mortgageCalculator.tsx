import { Grid } from "@mui/material";
import React from "react";
import { BaseCard } from "../components /card/baseCard";
import { PaymentCalculator } from "../components /form/paymentCalculator";
import { PrepaymentForm } from "../components /form/prePaymentPlan";

export const MortgageCalculator = () => {
  return (
    <Grid container>
      <Grid container spacing={4} justifyContent="center">
        <Grid item lg={6}>
          <BaseCard
            title="payment plan"
            cardContent={() => <PaymentCalculator />}
          />
        </Grid>
        <Grid item lg={6}>
          <BaseCard
            title="Prepayment plan"
            cardContent={() => <PrepaymentForm />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
