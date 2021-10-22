import { createTheme, Theme } from "@mui/material/styles";

const breakPoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 800,
    lg: 1200,
    xl: 1440,
  },
};
const palette = {
  primary: {
    main: "#009688",
  },
  secondary: {
    main: "#FFC107",
  },
};

export const lightTheme: Theme = createTheme({
  breakpoints: breakPoints,
  palette: {
    ...palette,
    mode: "light",
  },
});

export const darkTheme: Theme = createTheme({
  breakpoints: breakPoints,
  palette: {
    ...palette,
    mode: "dark",
  },
});
