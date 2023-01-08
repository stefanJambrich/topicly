import React, { useEffect } from "react";
import { connector } from "../../helpers/connection";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../helpers/cookies";

const Login = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [redirectHome, setRedirectHome] = React.useState(false);

  const handleLogin = async () => {
    // axios.defaults.withCredentials = true;
    const res = await connector.post("/auth/login", {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
    setRedirectHome(true);
  };

  return (
    <>
      {redirectHome ? <Navigate to="/" /> : ""}
      <input
        type="email"
        placeholder="Email"
        className="input"
        id="email"
        required
        ref={emailRef}
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        required
        ref={passwordRef}
      />
      <button
        type="submit"
        className="button-login px-16 bg-gradient w-fit mx-auto"
        onClick={handleLogin}
      >
        Login
      </button>
    </>
  );
};

export default Login;
