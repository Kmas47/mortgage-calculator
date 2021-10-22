import { Grid, IconButton, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";
import { ThemeContext } from "../../context/provider/themeProvider";
import { DARK_MODE } from "../../utils /constants/constants";

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
    zIndex: 999999999,
  },
}));

export const Header = () => {
  const contextValue: any = useContext(ThemeContext);
  const { darkMode, setState } = contextValue;
  const classes = useStyles();
  const handleClick = () => {
    setState((prevState) => !prevState);
    window.localStorage.setItem(DARK_MODE, `${!darkMode}`);
  };
  return (
    <Grid container className={classes.root} sx={{ p: 1 }} alignItems="center">
      <Grid item sx={{ m: "auto" }}>
        <Typography sx={{ fontWeight: 600 }}>Mortgage Calculator</Typography>
      </Grid>
      <Grid item>
        <IconButton
          id="theme-toggle"
          aria-label="Change theme mode"
          onClick={handleClick}
        >
          <Brightness6OutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
