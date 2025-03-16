"use client";

import { LanguageType, translateLanguage } from "@/constants/language";
import { Language, LanguageKey, english } from "@/constants/language/en";
import { get } from "lodash";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext<{
  lang: LanguageType;
  language: Language;
  setLang: Dispatch<SetStateAction<LanguageType>>;
}>({
  language: english,
  setLang: () => {},
  lang: "vi",
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LanguageType>("en");
  return (
    <LanguageContext.Provider value={{ lang, language: translateLanguage[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  return useMemo(() => {
    return {
      t(key: LanguageKey, obj?: any) {
        if (obj) {
          var trans = (get(context.language, key, key) as any as string) ?? key;

          Object.keys(obj).forEach((k) => {
            const regex = new RegExp(`{{${k}}}`, "g");
            trans = trans.replaceAll(regex, obj[k]);
          });

          return trans;
        }

        return get(context.language, key, key);
      },
      setLang: context.setLang,
    };
  }, [context]);
};

export default LanguageContext;
