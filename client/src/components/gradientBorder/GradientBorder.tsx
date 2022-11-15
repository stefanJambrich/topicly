import React from "react";
import { LayoutProps } from "../../interfaces/LayoutProps.interface";

const GradientBorder = ({ children, className }: LayoutProps) => {
  return <div className={`p-[1px] rounded-xl bg-gradient ${className}`}>{children}</div>;
};

export default GradientBorder;
