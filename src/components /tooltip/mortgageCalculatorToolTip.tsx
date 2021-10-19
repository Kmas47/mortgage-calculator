import { Grid, IconButton, Tooltip } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

export const MortgageCalculatorToolTip = ({title}) => {
  return (
    <Grid item>
      <Tooltip title={title}>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </Grid>
  );
};
