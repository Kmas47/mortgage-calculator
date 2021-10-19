import React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./utils /config/emotionCache";
import { theme } from "./utils /config/theme";
import { Page } from "./components /theme/page";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MortgageCalculator } from "./pages/mortgageCalculator";

const clientSideEmotionCache = createEmotionCache();

function App() {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Page>
          <MortgageCalculator />
        </Page>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
