import { Grid, InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  PRE_PAYMENT_AMOUNT,
  PRE_PAYMENT_FREQUENCY,
  PRE_PAYMENT_START,
} from "../../utils /constants/constants";
import {
  PRE_PAYMENT_AMOUNT_TOOLTIP,
  PRE_PAYMENT_FREQUENCY_TOOLTIP,
  PRE_PAYMENT_START_TOOLTIP,
} from "../../utils /constants/tooltipConstant";
import { numAmortizationPeriod } from "../../utils /helpers/calculationHelpers";
import { ToolTipLabel } from "../tooltip/tooltipLabel";

const prePaymentAmountErrorText =
  "The prepayment amount must be less than the mortgage amount";

export const PrepaymentForm = (props) => {
  const [prePaymentAmountError, setPrePaymentAmountError] =
    useState<boolean>(false);
  const { paymentPlan, prePayment, dispatch, handleChange, handleSelect } =
    props;

  const totalPayments: number = numAmortizationPeriod(
    paymentPlan.amortizationPeriod,
    paymentPlan.paymentFrequency.value
  );
  const paymentFrequencyValue =
    totalPayments / paymentPlan.paymentFrequency.value;

  const prePaymentFrequency = [
    { label: "One time", value: 1 },
    { label: "Each year", value: paymentFrequencyValue },
  ];

  const handleValidation = (type) => () => {
    switch (type) {
      case PRE_PAYMENT_AMOUNT:
        if (
          parseInt(paymentPlan.mortgageAmount) <=
          parseInt(prePayment.prePaymentAmount)
        ) {
          setPrePaymentAmountError(true);
        } else setPrePaymentAmountError(false);
        return;
      default:
        return false;
    }
  };

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <ToolTipLabel
          toolTipTitle={PRE_PAYMENT_AMOUNT_TOOLTIP}
          title="Prepayment Amount:"
        />
        <Grid item md={6}>
          <TextField
            type="number"
            id="mortgage-pre-payment-amount"
            aria-labelledby="mortgage pre-payment amount"
            value={prePayment.prePaymentAmount}
            onChange={handleChange(PRE_PAYMENT_AMOUNT, dispatch)}
            onBlur={handleValidation(PRE_PAYMENT_AMOUNT)}
            error={prePaymentAmountError}
            helperText={prePaymentAmountError ? prePaymentAmountErrorText : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            size="small"
            sx={{ ".MuiFormHelperText-root": { mx: 0 } }}
          />
        </Grid>
        <ToolTipLabel
          toolTipTitle={PRE_PAYMENT_FREQUENCY_TOOLTIP}
          title="Prepayment Frequency:"
        />
        <Grid item md={3}>
          <TextField
            select
            id="mortgage-pre-payment-frequency"
            aria-labelledby="mortgage pre-payment frequency"
            size="small"
            value={prePayment.prePaymentFrequency.value}
            onChange={handleSelect(PRE_PAYMENT_FREQUENCY, dispatch)}
            onBlur={handleValidation}
          >
            {prePaymentFrequency.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <ToolTipLabel
          toolTipTitle={PRE_PAYMENT_START_TOOLTIP}
          title="Start With Payment:"
        />
        <Grid item>
          <TextField
            type="number"
            id="start-prepayment-plan"
            aria-labelledby="start pre-payment plan"
            size="small"
            value={prePayment.prePaymentStart}
            onChange={handleChange(PRE_PAYMENT_START, dispatch)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
