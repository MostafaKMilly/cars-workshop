import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./assets/locales/en.json";
import ar from "./assets/locales/ar.json";

const resources = {
  en,
  ar,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
