import {
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { IPaymentPlan } from "../../@types/types";
import {
  AMORTIZATION_PERIOD,
  INTEREST_RATE,
  MORTGAGE_AMOUNT,
  PAYMENT_FREQUENCY,
  TERM,
} from "../../utils /constants/constants";

export const PaymentCalculator = (props: {
  paymentPlan: IPaymentPlan;
  dispatch: any;
  handleChange: Function;
  handleSelect: Function;
}) => {
  const { paymentPlan, dispatch, handleChange, handleSelect } = props;
  const paymentFrequency = [
    { label: "Weekly", value: "5" },
    { label: "Bi-Weekly", value: "26" },
    { label: "Monthly", value: "52" },
  ];

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={6}>
          {" "}
          <Typography>Mortgage Amount:</Typography>
        </Grid>
        <Grid item md={6}>
          <TextField
            type="number"
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
            value={paymentPlan.mortgageAmount}
            onChange={handleChange(MORTGAGE_AMOUNT, dispatch)}
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
          <Typography>Interest Rate:</Typography>
        </Grid>
        <Grid item>
          <TextField
            type="number"
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
            value={paymentPlan.interestRate}
            onChange={handleChange(INTEREST_RATE, dispatch)}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            size="small"
          />
        </Grid>
        <Grid item md={6}>
          {" "}
          <Typography>Amortization Period:</Typography>
        </Grid>
        <Grid item md={3}>
          <TextField
            select
            name="years"
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
            size="small"
            value={paymentPlan.amortizationPeriod.years}
            onChange={handleSelect(AMORTIZATION_PERIOD, dispatch)}
          >
            {[...Array(31).keys()].map((i) => (
              <MenuItem key={i} value={i}>
                {i} Years
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={3}>
          <TextField
            select
            name="months"
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
            size="small"
            defaultValue={0}
            value={paymentPlan.amortizationPeriod.months}
            onChange={handleSelect(AMORTIZATION_PERIOD, dispatch)}
          >
            {[...Array(13).keys()].map((i) => (
              <MenuItem key={i} value={i}>
                {i} months
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={6} xs={6}>
          {" "}
          <Typography>Payment Frequency:</Typography>
        </Grid>
        <Grid item md={6} xs={6}>
          <TextField
            select
            id="payment-frequency"
            aria-labelledby="payment frequency"
            value={paymentPlan.paymentFrequency.value}
            onChange={handleSelect(PAYMENT_FREQUENCY, dispatch)}
            variant="outlined"
            size="small"
          >
            {[...paymentFrequency].map((payment) => (
              <MenuItem key={payment.label} value={payment.value}>
                {payment.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} md={6}>
          {" "}
          <Typography>Term:</Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            select
            id="mortgage-term"
            aria-labelledby="mortgage term"
            size="small"
            value={paymentPlan.term}
            onChange={handleChange(TERM, dispatch)}
          >
            {[...Array(11).keys()].map((i) => (
              <MenuItem key={i} value={i}>
                {i} years
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Grid>
  );
};
