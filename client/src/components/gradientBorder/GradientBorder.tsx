import React from "react";
import { ElementProps, LayoutProps } from "../../interfaces/LayoutProps.interface";

const GradientBorder = ({ children, className, style }: ElementProps) => {
  return <div className={`${className} p-[1px] bg-gradient z-10 `} style={style}>{children}</div>;
};

export default GradientBorder;
