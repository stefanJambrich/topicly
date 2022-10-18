import React from "react";
import { LayoutProps } from "../../interfaces/LayoutProps.interface";

const Main = ({ span, children }: LayoutProps) => {
  return (
    <main className="col-span-9">{children}</main>
  );
};

export default Main;
