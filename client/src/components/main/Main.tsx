import React from "react";
import { LayoutProps } from "../../interfaces/LayoutProps.interface";

const Main = ({ children }: LayoutProps) => {
  return (
    <main className="flex-auto">{children}</main>
  );
};

export default Main;
