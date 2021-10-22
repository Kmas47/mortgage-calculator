import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { createContext, useState } from "react";
import { IThemeContextType } from "../../@types/types";
import { darkTheme, lightTheme } from "../../utils /config/theme";
import { DARK_MODE } from "../../utils /constants/constants";

const IntialThemeContext: IThemeContextType = {
  darkMode: false,
  setState: () => {},
};

export const ThemeContext = createContext(IntialThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const darkMode = window?.localStorage?.getItem(DARK_MODE) === "true" || false;
  const [state, setState] = useState<boolean>(darkMode);
  const currentTheme = state ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ darkMode, setState }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
