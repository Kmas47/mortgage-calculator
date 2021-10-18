import {
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  PRE_PAYMENT_AMOUNT,
  PRE_PAYMENT_FREQUENCY,
  PRE_PAYMENT_START,
} from "../../utils /constants/constants";

export const PrepaymentForm = (props) => {
  const { paymentPlan, prePayment, dispatch, handleChange, handleSelect } =
    props;
  const prePaymentFrequency = [
    { label: "One time", value: 1 },
    { label: "Each year", value: paymentPlan.amortizationPeriod.years },
  ];

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={6}>
          {" "}
          <Typography>Prepayment Amount:</Typography>
        </Grid>
        <Grid item md={6}>
          <TextField
            type="number"
            id="mortgage-pre-payment-amount"
            aria-labelledby="mortgage pre-payment amount"
            value={prePayment.prePaymentAmount}
            onChange={handleChange(PRE_PAYMENT_AMOUNT, dispatch)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            size="small"
          />
        </Grid>
        <Grid item md={6}>
          {" "}
          <Typography>Prepayment Frequency:</Typography>
        </Grid>
        <Grid item md={3}>
          <TextField
            select
            id="mortgage-pre-payment-frequency"
            aria-labelledby="mortgage pre-payment frequency"
            size="small"
            value={prePayment.prePaymentFrequency.value}
            onChange={handleSelect(PRE_PAYMENT_FREQUENCY, dispatch)}
          >
            {prePaymentFrequency.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={6}>
          {" "}
          <Typography>Start With Payment:</Typography>
        </Grid>
        <Grid item>
          <TextField
            type="number"
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
            size="small"
            value={prePayment.prePaymentStart}
            onChange={handleChange(PRE_PAYMENT_START, dispatch)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
