import AppWrapper from "@/containers/app-wrapper";
import { ensureStartsWith } from "@/utils";
import { ReactNode } from "react";
import StyledComponentsRegistry from "../../lib/registry";
import "../../src/styles/global.css";
import localFont from "next/font/local";

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, "@") : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, "https://") : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: "summary_large_image",
        creator: twitterCreator,
        site: twitterSite,
      },
    }),
};
const fwdFont = localFont({
  src: [
    {
      path: "../../public/fonts/Sobotia-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sobotia-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sobotia-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--fwd-font",
});

const highLinefont = localFont({
  src: [
    {
      path: "../../public/fonts/High_Line.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--fwd-highLine",
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html 
    
    lang="vi" className={`${highLinefont.variable}`}>
      <head>
       <link rel="icon" href="/img/poseLogo.svg" sizes="any" type="image/x-icon" />
      </head>
      <StyledComponentsRegistry>
        <body>
          <AppWrapper>{children}</AppWrapper>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
