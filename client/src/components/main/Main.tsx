import React from "react";
import { ElementProps, LayoutProps } from "../../interfaces/LayoutProps.interface";

const Main = ({ className, children }: ElementProps) => {
  return (
    <main className={`${className} flex-auto `}>{children}</main>
  );
};

export default Main;
