"use client";

import React from "react";
import { ButtonWrapper } from "./styled";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
