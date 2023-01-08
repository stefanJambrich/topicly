import React from "react";
import { ButtonProps } from "../../interfaces/LayoutProps.interface";
import GradientBorder from "../gradientBorder/GradientBorder";

export const ButtonGradient = ({
  className,
  value,
  children,
  circle,
  height,
}: ButtonProps) => {
  return (
    <div
      className={`${className} 
        ${circle ? "aspect-square rounded-full" : "aspect-[4/2] rounded-xl"} 
          p-[5px] bg-primary z-15`}
      style={{ height: height ? height : "100%" }}
    >
      <button
        className={`${
          circle ? "rounded-full" : "rounded-lg"
        } inline-grid place-items-center items-center uppercase bg-gradient font-semibold h-full w-full  hover:brightness-125 transition-all duration-200 ease-in-out`}
      >
        {value}
        {children}
      </button>
    </div>
  );
};

export const ButtonOutline = ({
  className,
  value,
  children,
  circle,
  height,
}: ButtonProps) => {
  return (
    <div
      className={`${className} rounded-full p-[5px] bg-primary z-15`}
      style={{ height: height ? height : "100%" }}
    >
      <button
        className={`rounded-full inline-grid place-items-center items-center uppercase bg-gradient font-semibold h-full w-full  hover:brightness-125 transition-all duration-200 ease-in-out p-[1px]`}
      >
        <div className={`rounded-full bg-primary w-full h-full flex items-center gap-1 text-sm px-3`}>
          {value}
          {children}
        </div>
      </button>
    </div>
  );
};
