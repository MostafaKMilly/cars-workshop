import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: "muiltr",
});

export const LocalizationProvider = (props: React.PropsWithChildren) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n.dir()]);

  return (
    <CacheProvider value={i18n.dir() === "rtl" ? cacheRtl : cacheLtr}>
      {props.children}
    </CacheProvider>
  );
};
