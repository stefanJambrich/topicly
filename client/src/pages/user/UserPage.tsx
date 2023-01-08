import React from "react";
import { useParams } from "react-router-dom";
import { Layout, Main, Navbar } from "../../components";
import "./style.css";

const UserPage = () => {
  const { userId } = useParams();

  return (
    <Layout>
      <Navbar />
      <Main className="relative">
        <img
          className="absolute select-none"
          src="accountBackground.svg"
          alt="My Happy SVG"
        />
        <div className="z-10">
          <div>
            <img src="avatar.jpg" alt="" />
          </div>

        </div>
      </Main>
    </Layout>
  );
};

export default UserPage;
