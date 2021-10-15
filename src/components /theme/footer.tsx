import { Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 120,
    [theme.breakpoints.up("sm")]: {
        height: 144,
      }
  },
  topFooter: {
    backgroundColor: theme.palette.common.white,
    height: "100%",
  },
  bottomFooter: {
    backgroundColor: theme.palette.primary.dark,
    height: "100%",
    color: theme.palette.common.white,
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" wrap="nowrap">
      <Grid item xs={12} className={classes.topFooter}>
        <Typography>Top footer</Typography>
      </Grid>
      <Grid item xs={12} className={classes.bottomFooter}>
        <Typography>bottom footer</Typography>
      </Grid>
    </Grid>
  );
};
