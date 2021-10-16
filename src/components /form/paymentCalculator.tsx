import {
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const PaymentCalculator = () => {
  return (
    <Grid container sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={6}>
          {" "}
          <Typography>Mortgage Amount:</Typography>
        </Grid>
        <Grid item md={6}>
          <TextField
            type="text"
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
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
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
            size="small"
          >
            {[...Array(30).keys()].map((i) => (
              <MenuItem key={i} value={i + 1}>
                {i + 1} Years
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={3}>
          <TextField
            select
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
            size="small"
          >
            {[...Array(12).keys()].map((i) => (
              <MenuItem key={i} value={i + 1}>
                {i + 1} months
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={6}>
          {" "}
          <Typography>Payment Frequency:</Typography>
        </Grid>
        <Grid item>
          <TextField
            type="number"
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
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
          <Typography>Term:</Typography>
        </Grid>
        <Grid item md={6}>
          <TextField
            type="number"
            id="mortgage-amount"
            aria-labelledby="mortgage amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            size="small"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
