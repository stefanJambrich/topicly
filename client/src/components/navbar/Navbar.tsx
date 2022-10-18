import React from "react";
import { LayoutProps } from "../../interfaces/LayoutProps.interface";
import { HiHome } from "react-icons/hi";
import { IoIosSend, IoIosNotifications, IoIosBookmark } from "react-icons/io";

const Navbar = ({ span }: LayoutProps) => {
  return (
    <nav className="col-span-1 flex flex-col py-4 justify-between px-2">
      <img
        src="/avatar.jpg"
        alt="avatar.jpg"
        className="rounded-full aspect-square w-12 flex self-center"
      />
      <div className="flex flex-col self-center gap-24">
        <div className="flex flex-col gap-5">
          <HiHome size={30} className="text-current" />
          <IoIosSend size={30} className="text-current" />
        </div>
        <div className="flex flex-col gap-5">
          <IoIosNotifications size={30} className="text-current" />
          <IoIosBookmark size={30} className="text-current" />
        </div>
      </div>
      <div>aa</div>
    </nav>
  );
};

export default Navbar;
