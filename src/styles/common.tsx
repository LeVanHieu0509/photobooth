import styled, { DefaultTheme, keyframes } from "styled-components";
import { device } from "./media";

export const renderColor = (color: string, theme: DefaultTheme) => {
  if (color == "primary") {
    return theme.color.status.primary;
  }

  return color || theme.color?.text?.body;
};

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Row = styled.div<{
  align?: "center" | "start" | "end";
  justify?: "center" | "start" | "end";
  rowGap?: number;
  rowGapMb?: number;
}>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  min-width: 100%;
  align-items: ${({ align }) => align || "start"};
  row-gap: ${({ rowGap }) => rowGap || 0}px;
  ${({ justify }) => (justify ? `justify-content: ${justify};` : "")};

  @media ${device.mobile} {
    row-gap: ${({ rowGapMb }) => rowGapMb || 0}px;
  }
`;

// export const Grid = styled.div<{
//   gap?: number;
//   columns?: string;
//   smColumns?: string;
// }>`
//   display: grid;
//   flex-wrap: wrap;
//   grid-template-columns: ${({ columns = "auto auto" }) => columns};

//   min-width: 100%;
//   gap: ${({ gap = 20 }) => gap}px;

//   @media ${device.mobile} {
//     grid-template-columns: ${({ smColumns = "auto auto" }) => smColumns};
//   }
// `;

interface FlexProps {
  align?: "center" | "start" | "end" | "inherit" | "baseline" | "flex-start" | "stretch";
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
  gap?: number;
  $gapMb?: number;
  mbDirection?: "row" | "column";
  direction?: "row" | "column";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align }) => align || "stretch"};
  gap: ${({ gap }) => gap || "0"}px;
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ direction }) => direction ?? "row"};

  @media ${device.mobile} {
    gap: ${({ $gapMb, gap }) => $gapMb || gap || "0"}px;
    flex-direction: ${({ mbDirection, direction }) => (mbDirection ? mbDirection : direction ? direction : "row")};
  }
`;
export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexFill = styled.div`
  flex: 1;
`;

interface TextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  bolder?: boolean;
  mb?: number;
  align?: "left" | "right" | "center";
}

export const Text = styled.p<TextProps>`
  margin: 0;
  margin-bottom: ${({ mb }) => mb || 0}px;
  font-size: ${({ size }) => size || 16}px;
  color: ${({ color, theme }) => renderColor(color as string, theme)};
  font-weight: ${({ bold, bolder }) => (bolder ? 500 : bold ? 700 : 400)};
  text-align: ${({ align }) => align};
`;

export const Label = styled.p<{
  disabled?: any;
  type?: any;
  required?: any;
  focus?: any;
  htmlFor?: any;
  error?: any;
  primary?: boolean;
  haveValue?: any;
}>`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${({ primary, theme }) => (primary ? theme.color.status.primary : "#636566;")};
  margin-bottom: 8px;

  @media ${device.mobile} {
    margin-bottom: 10px;
    font-size: 14px !important;
  }
`;
export const ValueText = styled.p<{
  primary?: boolean;
  align?: "left" | "right" | "center";
}>`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: ${({ primary, theme }) => (primary ? theme.color.status.primary : theme.color.text.body)};
  text-align: ${({ align }) => align || "left"};
`;

export const ValueImage = styled.div`
  width: 60px;
  height: 60px;
  margin: 4px;
  display: inline-block;

  position: relative;

  border-radius: 8px;
  border: 1px solid #edeff0;
  overflow: hidden;

  cursor: ${(onClick) => (onClick ? "pointer" : "unset")};

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

interface ColProps {
  md?: number;
  sm?: number;
  lg?: number;
  flex?: number;
  pd?: number;
}

export const ColDivider = styled.div<{ height?: number; color?: string }>`
  height: ${({ height }) => height || 20}px;
  width: 1px;
  margin-left: -1px;
  background: ${({ theme, color }) => color || theme.color.status.gray1};
  @media ${device.mobile} {
    width: 100%;
    height: 1px;
  }
`;

export const ColLine = styled.div<{ height?: number; color?: string }>`
  height: ${({ height }) => height || 1}px;
  background: ${({ theme, color }) => color || theme.color.status.gray1};
`;

export const Col = styled.div<ColProps>`
  width: ${({ md }) => md && 100 * (md / 12)}%;
  padding: ${({ pd }) => (pd ? `0 ${pd}px` : "0 10px")};

  ${({ flex }) => flex && `flex: ${flex};`}

  @media ${device.mobile} {
    width: ${({ sm = 12 }) => 100 * (sm / 12)}%;
  }
`;

export const Spacing = styled.div`
  flex: 1;
`;

const layoutGenerate = (value: any) => (typeof value === "number" ? `repeat(${value}, 1fr)` : value);

interface GridProps {
  $className?: string;
  $columns?: string | number;
  $gap?: number;
  $columnGap?: number;
  $rowGap?: number;
  $height?: string;
  $minRowHeight?: string;
  $flow?: string;
  $rows?: string | number;
  $justifyContent?: string;
  $alignContent?: string;
  $maxWidthChildren?: boolean;
  $mbColumns?: number;
  $middleColumns?: number;
  $mbGap?: number;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  height: ${({ $height = "auto" }) => $height};

  grid-auto-flow: ${({ $flow = "row" }) => $flow};
  grid-auto-rows: ${({ $minRowHeight }) => $minRowHeight && `minmax(${$minRowHeight}, auto)`};

  grid-template-columns: ${({ $columns = 12 }) => layoutGenerate($columns)};
  grid-template-rows: ${({ $rows }) => layoutGenerate($rows)};

  grid-gap: ${({ $gap }) => $gap}px;
  column-gap: ${({ $columnGap }) => $columnGap}px;
  row-gap: ${({ $rowGap }) => $rowGap}px;

  ${({ $justifyContent }) => $justifyContent && `justify-content: ${$justifyContent}`};
  ${({ $alignContent }) => $alignContent && `align-content: ${$alignContent}`};

  ${({ $maxWidthChildren }) =>
    $maxWidthChildren &&
    `
  div{
    width:100%;
  }
  `}

  @media ${device.noDesktop} {
    grid-template-columns: ${({ $middleColumns }) => layoutGenerate($middleColumns)};
  }

  @media ${device.mobile} {
    grid-gap: ${({ $mbGap }) => $mbGap}px;

    grid-template-columns: ${({ $mbColumns }) => layoutGenerate($mbColumns)};
  }
`;

export const ImagePercentWrapper = styled.div<{ percent?: number; $percentMobile?: number; radius?: number }>`
  height: 0;
  position: relative;
  overflow: hidden;
  padding-top: ${({ percent }) => percent}%;
  border-radius: ${({ radius }) => radius ?? 0}px;

  img {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  @media ${device.mobile} {
    ${({ $percentMobile }) => ($percentMobile ? `padding-top:${$percentMobile}%` : null)};
  }
`;
