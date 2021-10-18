import { createTheme, Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
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
      main: "#0033ffbf",
      dark: 'rgb(0 35 178)'
    },
    secondary: {
      main: "#fdd835",
    },
    background: {
      default: "#fafafa",
    },
    text: {
      primary: "#333",
      secondary: "#332200",
      disabled: "#eeeeee",
    },
    info: {
      main: "#ffff",
      dark: "#284168",
    },
  },
});
