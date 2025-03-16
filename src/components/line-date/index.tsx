"use client";

import React from "react";
import { Dot, LineDateWrapper } from "./styled";
import LeftIcon from "./left-icon";
import RightIcon from "./right-icon";
import { Flex } from "@/styles/common";

interface LineDateProps {
  date: string;
}

const LineDate = ({ date }: LineDateProps) => {
  return (
    <LineDateWrapper>
      <div>
        <LeftIcon />
        {date ? (
          <p className="body-3">{date}</p>
        ) : (
          <p className="body-3">
            <Dot space={3.5} />
            <Dot space={4.2} />
            <Dot space={5.2} />
            <Dot space={6.2} />
            <Dot space={7.2} />
          </p>
        )}

        <RightIcon />
      </div>
    </LineDateWrapper>
  );
};

export default LineDate;
