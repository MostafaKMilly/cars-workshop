import React, { useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useTranslation } from "react-i18next";
import { responsiveFontSizes, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: "muiltr",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const LocalizationProvider = ({ children }: React.PropsWithChildren) => {
  const { i18n } = useTranslation();
  const direction = i18n.dir();

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  return (
    <CacheProvider value={direction === "ltr" ? cacheLtr : cacheRtl}>
      <ThemeProvider theme={responsiveFontSizes(theme(direction))}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
