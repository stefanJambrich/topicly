import React from "react";
import { connector } from "../../helpers/connection";

const Register = () => {
  const handleRegister = () => {
    connector
      .post("/register", {
        username: "test",
        password: "test",
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          className="input"
          placeholder="First name"
          required
        />
        <input type="text" className="input" placeholder="Last name" required />
      </div>
      <input type="text" placeholder="Username" className="input" required />
      <input type="email" placeholder="Email" className="input" id="email" required />
      <input
        type="password"
        placeholder="Password"
        className="input"
        required
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="input"
        required
      />
      <button
        type="submit"
        className="button-login px-16 bg-gradient w-fit mx-auto"
        onClick={handleRegister}
      >
        Sign up
      </button>
    </>
  );
};

export default Register;
