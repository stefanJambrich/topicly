import React from "react";
import { LayoutProps } from "../../interfaces/LayoutProps.interface";
import { HiHome } from "react-icons/hi";
import {
  IoIosSend,
  IoIosNotifications,
  IoIosBookmark,
  IoIosSearch,
} from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import "./style.css";

const Navbar = ({ span }: LayoutProps) => {
  return (
    <nav
      className="col-span-1 
    flex flex-col justify-between py-4 px-4
    border-r-2 border-separator"
    >
      <img
        src="/avatar.jpg"
        alt="avatar.jpg"
        className="rounded-full aspect-square w-12 flex self-center"
      />
      <div className="flex flex-col self-center gap-24 relative">
        <div className="flex flex-col gap-5">
          <HiHome size={30} className="text-current nav-selected" />
          <IoIosSend size={30} className="text-current" />
        </div>

        <div className="absolute top-1/2 left-7 -translate-y-1/2 rounded-full">
          <div
            className="rounded-full bg-gradient p-3
            grid place-items-center"
          >
            <IoIosSearch size={30} className="text-current" />
          </div>

          <div id="search-icon-outline" className="rounded-full"></div>
        </div>

        <div className="flex flex-col gap-5">
          <IoIosNotifications size={30} className="text-current" />
          <IoIosBookmark size={30} className="text-current" />
        </div>
      </div>
      <IoSettingsSharp size={30} className="text-current flex self-center" />
    </nav>
  );
};

export default Navbar;
