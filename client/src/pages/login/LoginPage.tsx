import React from "react";
import GradientBorder from "../../components/gradientBorder/GradientBorder";
import { Link, useLocation } from "react-router-dom";

const LoginPage = () => {
  const { pathname } = useLocation();
  console.log(location);

  return (
    <div className="grid place-content-center h-screen w-screen">
      <p className="left-[40rem] bottom-[13rem] bg-text-login">Topicly</p>
      <p className="right-[40rem] top-[8rem] bg-text-login">Topicly</p>
      <GradientBorder className="w-80 z-10">
        <form className="px-5 py-3 bg-primary-accent-2 rounded-xl">
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
            {pathname === "/login" ? (
              <>
                <input type="text" placeholder="Username" className="input" />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
                <button
                  type="submit"
                  className="button-login px-16 bg-gradient w-fit mx-auto"
                >
                  Login
                </button>
              </>
            ) : (
              ""
            )}

            {pathname === "/register" ? (
              <>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Last name"
                  />
                </div>
                <input type="text" placeholder="Username" className="input" />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input"
                />
                <button
                  type="submit"
                  className="button-login px-16 bg-gradient w-fit mx-auto"
                >
                  Sign up
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </form>
      </GradientBorder>
    </div>
  );
};

export default LoginPage;
