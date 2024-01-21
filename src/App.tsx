import React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./utils /config/emotionCache";
import { Page } from "./components /theme/page";
import { MortgageCalculator } from "./pages/mortgageCalculator";
import { CustomThemeProvider } from "./context/provider/themeProvider";
import { Analytics } from '@vercel/analytics/react';

const clientSideEmotionCache = createEmotionCache();

function App() {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <CustomThemeProvider>
        <Page>
          <MortgageCalculator />
        </Page>
        <Analytics />
      </CustomThemeProvider>
    </CacheProvider>
  );
}

export default App;
