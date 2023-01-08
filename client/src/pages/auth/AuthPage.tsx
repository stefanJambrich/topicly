import React, {useEffect} from "react";
import GradientBorder from "../../components/gradientBorder/GradientBorder";
import { Link, Navigate, useLocation } from "react-router-dom";
import { connector } from "../../helpers/connection"
import {Login, Register} from "../../components/auth/";

const AuthPage = () => {
  const { pathname } = useLocation();
  

  return (
    <div className="grid place-content-center h-screen w-screen">
      <p className="left-[40rem] bottom-[27rem] bg-text-login">Topicly</p>
      <p className="right-[40rem] top-[15rem] bg-text-login">Topicly</p>

      <GradientBorder className="w-80 rounded-xl">
        <div className="px-5 py-3 bg-primary-accent-2 rounded-xl">
          <h2 className="text-center my-3 font-semibold text-4xl text-transparent bg-clip-text bg-gradient">
            TOPICLY
          </h2>
          <div className="flex gap-2">
            <Link
              to="/login"
              className={`${
                pathname === "/login"
                  ? "bg-gradient"
                  : "bg-primary-accent border-2 border-separator"
              } button-login`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`${
                pathname === "/register"
                  ? "bg-gradient"
                  : "bg-primary-accent border-2 border-separator"
              } button-login`}
            >
              Sign up
            </Link>
          </div>
          <div className="grid gap-2 mt-2">
            {pathname === "/login" ? <Login /> : ""}

            {pathname === "/register" ? <Register /> : ""}
          </div>
        </div>
      </GradientBorder>
    </div>
  );
};

export default AuthPage;
