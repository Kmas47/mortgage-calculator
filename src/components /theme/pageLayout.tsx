import { Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    height: '100%',
    padding: 32
  },
}));

export const PageLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}> {children} </Box>;
};
