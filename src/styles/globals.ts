import { Inter, Lora,Poppins  } from "next/font/google";

import { createGlobalStyle, css } from "styled-components";
import { device } from "./media";
import { styleBooth } from "./photo-booth";

const inter = Inter({ subsets: ["latin"], preload: true, fallback: ["Arial"] });
const lora = Lora({ subsets: ["latin"], preload: true, fallback: ["Arial"] });

const poppins = Poppins({
  subsets: ["latin"], preload: true, fallback: ["Arial"],
  weight: "400"
});

function renderSpace(type: "margin" | "padding", prefix = "") {
  return [0, 2, 4, 6, 8, 10, 12, 14, 15, 16, 17, 20, 24, 28, 30, 32, 36, 40, 50, 60, 62, 100, 200]
    .map((size) =>
      ["", "-top", "-left", "-bottom", "-right"]
        .map(
          (dir) => `.${prefix}${type.slice(0, 1)}${dir.slice(1, 2)}-${size} { ${type}${dir}: ${size}px !important; }`
        )
        .join("\n")
    )
    .join("\n");
}

export const ScrollBarStyle = css`
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #e3e1e19e;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #666666;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
  }
`;

const style = css`
  :root {
    --font-inter: ${inter.style.fontFamily};
    --font-lora: ${inter.style.fontFamily};
    --font-poppins: ${poppins.style.fontFamily};
  }

  html,
  body {
    font-family: var(--font-poppins);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    width: 100%;
    padding: 0;
    margin: 0;

    scroll-behavior: smooth;

    /* cursor: none !important; */
  }

  body {
    /* overflow: hidden !important; */
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  input,
  textarea,
  select,
  button {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;

    border: 0 none;
    outline: 0 none;
    background: transparent;

    /* cursor: none; */

    :disabled {
      opacity: 1;
    }
  }
  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5
   {
    margin: 0px;
    letter-spacing: 0;
    font-family: var(--fwd-font) !important;
  }

  span {
    font-family: var(--font-poppins) !important;
  }

  p {
    font-family: var(--font-poppins) !important;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: auto;

    @media ${device.mobile} {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;

    @media ${device.mobile} {
      font-size: 20px;
    }
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 40px;

    @media ${device.mobile} {
      font-size: 18px;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }

  h5 {
    font-size: 16px;
    font-weight: 500;
    line-height: auto;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    line-height: auto;

    text-transform: uppercase;
  }

  .body-1 {
    font-size: 16px;
    font-weight: 500;
    line-height: auto;
  }

  .body-2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .body-3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  p {
    margin: 0px;

    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
  }

  .full-width {
    width: 100% !important;
  }

  .text-light {
    font-weight: 300 !important;
  }

  .text-regular {
    font-weight: 400 !important;
  }

  .text-medium {
    font-weight: 500 !important;
  }

  .text-semibold {
    font-weight: 600 !important;
  }

  .text-bold {
    font-weight: 700 !important;
  }

  .text-center {
    text-align: center;
  }

  .pointer {
    cursor: pointer;
  }

  .relative {
    position: relative;
  }

  .full-height {
    height: 100% !important;
  }

  .hide-mobile {
    @media ${device.mobile} {
      display: none !important;
    }
  }

  .hide-desktop {
    @media ${device.noMobile} {
      display: none !important;
    }
  }

  .primary-color {
    color: #febf00;
  }

  .container {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
  }

  .w-62 {
    width: 62%;

    @media ${device.mobile} {
      width: 100%;
    }
  }
  .text-primary {
    color: #febf00;
  }

  .shadow-pro {
    box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.2);
  }
  .absolute {
    position: absolute;
  }

  ${renderSpace("margin")};
  ${renderSpace("padding")};

  @media ${device.mobile} {
    ${renderSpace("margin", "sm-")};
    ${renderSpace("padding", "sm-")};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${style}
  ${styleBooth}
  ${ScrollBarStyle}
`;
