import React from "react";
import { LayoutProps } from "../../interfaces/LayoutProps.interface";

const SideBar = ({ span, children }: LayoutProps) => {
  return (
    <aside className="col-span-2">{children}</aside>
  );
};

export default SideBar;
