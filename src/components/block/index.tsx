import React from "react";
import { BlockContent, BlockFooter, BlockHeader, BlockWrapper } from "./styled";
import Icons from "../icons";

interface BlockProps {
  title: string;
  children?: React.ReactNode;
}

const Block = ({ title, children }: BlockProps) => {
  return (
    <BlockWrapper isChildren={Boolean(children)}>
      <BlockHeader>
        <Icons icon="icon-label" />
        <h6>{title}</h6>
      </BlockHeader>

      {children && (
        <>
          <BlockContent>{children}</BlockContent>
          <BlockFooter>
            <Icons icon="icon-block-footer" />
          </BlockFooter>
        </>
      )}
    </BlockWrapper>
  );
};

export default Block;
