import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import {
  INTEREST_PAYMENTS,
  MORTGAGE_PAYMENT,
  NUMBER_OF_PAYMENTS,
  PREPAYMENT,
  PRINCIPAL_PAYMENTS,
  TOTAL_COST,
} from "../../utils /constants/tooltipConstant";
import { currencyFormatter } from "../../utils /helpers/numberFormatter";
import { ToolTipLabel } from "../tooltip/tooltipLabel";

export const MortgageCalculationTable = (props) => {
  const {
    term,
    totalPayments,
    payments,
    termPrePayment,
    downPayment,
    termPrincipalAmount,
    principal,
    termInterestPayment,
    totalInterestPayment,
    termTotalPayableAmount,
    totalAmountPayable,
  } = props;

  const tableHeader = ["Category", "Term", "Amortization Period"];

  const tableBody = [
    {
      title: "Number of Payments",
      tooltip: NUMBER_OF_PAYMENTS,
      term: term,
      amortizationPeriod: totalPayments,
    },
    {
      title: "Mortgage Payment",
      tooltip: MORTGAGE_PAYMENT,
      term: currencyFormatter(payments),
      amortizationPeriod: currencyFormatter(payments),
    },
    {
      title: "Prepayment",
      tooltip: PREPAYMENT,
      term: currencyFormatter(termPrePayment),
      amortizationPeriod: currencyFormatter(downPayment),
    },
    {
      title: "Principal Payments",
      tooltip: PRINCIPAL_PAYMENTS,
      term: currencyFormatter(termPrincipalAmount),
      amortizationPeriod: currencyFormatter(principal),
    },
    {
      title: "Interest Payments",
      tooltip: INTEREST_PAYMENTS,
      term: currencyFormatter(termInterestPayment),
      amortizationPeriod: currencyFormatter(totalInterestPayment),
    },
    {
      title: "Total Cost",
      tooltip: TOTAL_COST,
      term: currencyFormatter(termTotalPayableAmount),
      amortizationPeriod: currencyFormatter(totalAmountPayable),
    },
  ];

  return (
    <Grid item xs={12}>
      <TableContainer sx={{ width: "100%" }}>
        <Table stickyHeader aria-label="Calculation Table">
          <TableHead>
            <TableRow>
              {tableHeader.map((title) => (
                <TableCell key={title}>
                  <Typography>{title}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBody.map((option) => (
              <TableRow key={option.title}>
                <TableCell>
                  <ToolTipLabel
                    toolTipTitle={option.tooltip}
                    title={option.title}
                  />
                </TableCell>
                <TableCell>
                  <Typography>{option.term}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{option.amortizationPeriod}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
