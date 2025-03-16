"use client";

import { client } from "@/api";
import { AppProvider } from "@/contexts/app";
import { LanguageProvider } from "@/contexts/language";
import { lightTheme } from "@/styles/theme";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ThemeWrapper from "../theme-wrapper";

export default function AppWrapper({ children }: { children: any }) {
  return (
    <AppProvider>
      <LanguageProvider>
        <ApolloProvider client={client}>
          <ThemeWrapper theme={lightTheme}>
            <ThemeProvider>{children}</ThemeProvider>
          </ThemeWrapper>
          <ToastContainer />
        </ApolloProvider>
      </LanguageProvider>
    </AppProvider>
  );
}
