import React from "react";
import { Navbar, SideBar } from "../../components";

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen">
      
      <Navbar />
      aaa
      <SideBar>
        <p className="text-center text-secondary">Side bar</p>
      </SideBar>
    </div>
  );
};

export default HomePage;
