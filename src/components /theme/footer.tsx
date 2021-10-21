import { Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    height: 120,
    [theme.breakpoints.up("sm")]: {
      height: 144,
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" wrap="nowrap">
      <Grid item xs={12}>
        <Typography>footer</Typography>
      </Grid>
    </Grid>
  );
};
