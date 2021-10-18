import { Avatar, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "sticky",
    top: 0,
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    height: 60,
    color: theme.palette.common.white,
    [theme.breakpoints.up("sm")]: {
      height: 80,
    },
    [theme.breakpoints.up("lg")]: {
      height: 60,
    },
    zIndex: 999999999
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} sx={{ p: 1 }} alignItems="center">
      <Grid item>
        <Avatar alt="Company Logo">
          <Typography color="info.dark" sx={{ fontWeight: 600 }}>
            Logo
          </Typography>
        </Avatar>
      </Grid>
      <Grid item sx={{ m: "auto" }}>
        <Typography sx={{ fontWeight: 600 }}>Mortgage Calculator</Typography>
      </Grid>
    </Grid>
  );
};
