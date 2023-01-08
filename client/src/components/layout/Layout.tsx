import React from "react";
import {
  ElementProps,
  LayoutProps,
} from "../../interfaces/LayoutProps.interface";

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex h-screen w-screen">{children}</div>;
};

export default Layout;
