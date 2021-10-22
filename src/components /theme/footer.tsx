import { Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    height: 120,
    color: theme.palette.common.white,
    [theme.breakpoints.up("sm")]: {
      height: 144,
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justifyContent="center"
      alignItems="baseline"
      spacing={4}
      sx={{ px: 2 }}
    >
      <Grid item>
        <Typography>Privacy Policy</Typography>
      </Grid>
      <Grid item>
        <Typography>Cookie Policy</Typography>
      </Grid>
      <Grid item>
        <Typography>Terms &amp; Conditions</Typography>
      </Grid>
    </Grid>
  );
};
