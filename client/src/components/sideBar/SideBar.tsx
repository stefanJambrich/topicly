import React from "react";
import { ElementProps, LayoutProps } from "../../interfaces/LayoutProps.interface";

const SideBar = ({ className, children }: ElementProps) => {
  return (
    <aside className={`${className} h-min-full`}>{children}</aside>
  );
};

export default SideBar;
