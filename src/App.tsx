import React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./utils /config/emotionCache";
import { Page } from "./components /theme/page";
import { MortgageCalculator } from "./pages/mortgageCalculator";
import { CustomThemeProvider } from "./context/provider/themeProvider";

const clientSideEmotionCache = createEmotionCache();

function App() {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <CustomThemeProvider>
        <Page>
          <MortgageCalculator />
        </Page>
      </CustomThemeProvider>
    </CacheProvider>
  );
}

export default App;
