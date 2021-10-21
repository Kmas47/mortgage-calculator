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
import { currencyFormatter } from "../../utils /helpers/numberFormatter";
import { ToolTipLabel } from "../tooltip/tooltipLabel";

export const MortgageCalculationTable = (props) => {
  const {
    term,
    totalPayments,
    payments,
    termPrePayment,
    downPayment,
    termPrincipleAmount,
    principle,
    termInterestPayment,
    totalInterestPayment,
    termTotalPayableAmount,
    totalAmountPayable,
  } = props;
  const tableBody = [
    {
      title: "Number of Payments",
      tooltip: "234",
      term: term,
      amortizationPeriod: totalPayments,
    },
    {
      title: "Mortgage Payment",
      tooltip: "234",
      term: currencyFormatter(payments),
      amortizationPeriod: currencyFormatter(payments),
    },
    {
      title: "Prepayment",
      tooltip: "234",
      term: currencyFormatter(termPrePayment),
      amortizationPeriod: currencyFormatter(downPayment),
    },
    {
      title: "Principal Payments",
      tooltip: "234",
      term: currencyFormatter(termPrincipleAmount),
      amortizationPeriod: currencyFormatter(principle),
    },
    {
      title: "Interest Payments",
      tooltip: "234",
      term: currencyFormatter(termInterestPayment),
      amortizationPeriod: currencyFormatter(totalInterestPayment),
    },
    {
      title: "Total Cost",
      tooltip: "234",
      term: currencyFormatter(termTotalPayableAmount),
      amortizationPeriod: currencyFormatter(totalAmountPayable),
    },
  ];
  return (
    <Grid item xs={12}>
      <TableContainer sx={{ width: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Category</Typography>
              </TableCell>
              <TableCell>
                <Typography>Term</Typography>
              </TableCell>
              <TableCell>
                <Typography>Amortization Period</Typography>
              </TableCell>
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
