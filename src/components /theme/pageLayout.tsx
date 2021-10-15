import { Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
  },
}));

export const PageLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}> {children} </Box>;
};
