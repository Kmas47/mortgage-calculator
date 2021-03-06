import {
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  useMediaQuery,
  useTheme,
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
import {
  PAYMENT_AMOUNT_TOOLTIP,
  PAYMENT_PLAN_AMORTIZATION_TOOLTIP,
  PAYMENT_PLAN_FREQUENCY,
  PAYMENT_PLAN_INTEREST_RATE_TOOLTIP,
  PAYMENT_PLAN_TERM,
} from "../../utils /constants/tooltipConstant";
import { ToolTipLabel } from "../tooltip/tooltipLabel";

export const PaymentCalculator = (props: {
  paymentPlan: IPaymentPlan;
  dispatch: any;
  handleChange: Function;
  handleSelect: Function;
}) => {
  const theme = useTheme();
  const isTablet: boolean = useMediaQuery(theme.breakpoints.up("sm"));
  const { paymentPlan, dispatch, handleChange, handleSelect } = props;
  const paymentFrequency = [
    { label: "Weekly", value: 52 },
    { label: "Bi-Weekly", value: 26 },
    { label: "Monthly", value: 12 },
  ];

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <ToolTipLabel
          toolTipTitle={PAYMENT_AMOUNT_TOOLTIP}
          title="Mortgage Amount:"
        />

        <Grid item md={6}>
          <TextField
            type="number"
            id="mortgage-amount"
            aria-label="mortgage amount"
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
        <ToolTipLabel
          toolTipTitle={PAYMENT_PLAN_INTEREST_RATE_TOOLTIP}
          title="Interest Rate:"
        />
        <Grid item>
          <TextField
            type="number"
            id="interest-rate"
            aria-label="annual mortgage interest rate"
            value={paymentPlan.interestRate}
            onChange={handleChange(INTEREST_RATE, dispatch)}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            size="small"
          />
        </Grid>
        <ToolTipLabel
          toolTipTitle={PAYMENT_PLAN_AMORTIZATION_TOOLTIP}
          title="Amortization Period:"
        />
        <Grid
          item
          container
          direction="row"
          spacing={2}
          md={6}
          xs={isTablet ? 6 : 12}
          wrap="nowrap"
        >
          <Grid item>
            <TextField
              select
              name="years"
              id="amortization-years"
              aria-label="mortgage amortization years"
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
          <Grid item>
            <TextField
              select
              name="months"
              id="mortgage-amount"
              aria-label="mortgage amount"
              size="small"
              defaultValue={0}
              value={paymentPlan.amortizationPeriod.months}
              onChange={handleSelect(AMORTIZATION_PERIOD, dispatch)}
            >
              {[...Array(12).keys()].map((i) => (
                <MenuItem key={i} value={i}>
                  {i} months
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <ToolTipLabel
          toolTipTitle={PAYMENT_PLAN_FREQUENCY}
          title="Payment Frequency:"
        />
        <Grid item md={6} xs={isTablet ? 6 : 12}>
          <TextField
            select
            id="payment-frequency"
            aria-label="payment frequency"
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
        <ToolTipLabel toolTipTitle={PAYMENT_PLAN_TERM} title="Term:" />
        <Grid item xs={6} md={6}>
          <TextField
            select
            id="mortgage-term"
            aria-label="mortgage term"
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
