import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { CustomToolTip } from "./customToolTip";

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: `0 !important`,
  },
}));

export const ToolTipLabel = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet: boolean = useMediaQuery(theme.breakpoints.up("sm"));
  const { toolTipTitle, title } = props;
  return (
    <Grid className={classes.root} item xs={isTablet ? 6 : 12} md={6}>
      <Grid container alignItems="center" wrap="nowrap">
        <CustomToolTip title={toolTipTitle} />
        <Grid item>
          <Typography whiteSpace="nowrap">{title}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
