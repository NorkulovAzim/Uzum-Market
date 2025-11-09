import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "../src/locales/uzlang.json";

import en from "../src/locales/Enlang.json";
import uz from "../src/locales/uzlang.json";

const resources = {
  uz: {
    translation: uz,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
});

export default i18n;
