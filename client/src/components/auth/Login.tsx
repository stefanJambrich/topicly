import React from "react";
import { connector } from "../../helpers/connection";
import { redirect } from "react-router-dom";

const Login = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    fetch("https://topicly.backend.thecrimsonbaron.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }),
    }).then((res) => {
      console.log(res.headers);
    });
  };

  return (
    <>
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
