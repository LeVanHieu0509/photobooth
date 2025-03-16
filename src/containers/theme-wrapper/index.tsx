"use client";

import { Footer } from "@/components/footer";
import Header from "@/components/header";
import AppContext from "@/contexts/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export type ThemeWrapperProps = {
  children: ReactNode;
  theme: DefaultTheme;
};

const ThemeWrapper = ({ children, theme }: ThemeWrapperProps) => {
  const pathname = usePathname();

  useEffect(() => {
    const listener = function (ev: MouseEvent) {
      const button = ev.target as HTMLButtonElement;
      if (button.tagName === "BUTTON" && !button.disabled) {
        const clickable = button.dataset.clickable;
        if (clickable === "false") {
          ev.preventDefault();
          ev.stopPropagation();
          return;
        }
        button.dataset.clickable = "false";
        button.style.pointerEvents = "none";
        setTimeout(() => {
          button.dataset.clickable = "true";
          button.style.pointerEvents = "";
        }, 300);
      }
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);

  const Layout = useMemo(() => {
    if (["/_error"].includes(pathname)) {
      return Fragment;
    }

    return Fragment;
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: "#ffffff" }}>
        <Header />
        <Layout>{children}</Layout>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
