import React, { useEffect } from "react";
import { connector } from "../../helpers/connection";
import { Navigate } from "react-router-dom";

const Login = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [redirectHome, setRedirectHome] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const res = await connector.post("/auth/login", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      console.log(res.data);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("username", res.data.nickname);
      localStorage.setItem("picture", res.data.picture);
      setRedirectHome(true);
    } catch (err: any) {
      setMessage(err.response.data);
    }
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
      {message ? <p className="text-red-500 text-center">{message}</p> : ""}
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
