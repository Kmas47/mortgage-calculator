import { createTheme, Theme } from "@mui/material/styles";

export const lightTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#009688",
    },
    secondary: {
      main: '#FFC107'
    },
    mode: 'light'
  },
});

export const darkTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#009688",
    },
    secondary: {
      main: '#FFC107'
    },
    mode: 'dark'
  },
});
