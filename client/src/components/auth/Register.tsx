import React from "react";
import { connector } from "../../helpers/connection";

const Register = () => {
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);
  const [meesage, setMessage] = React.useState<string | null>(null);

  const handleRegister = async () => {
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await connector.post("/auth/register", {
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        nickname: usernameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      console.log(res.data);
    } catch (err: any) {
      setMessage(err.response.data);
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          className="input"
          placeholder="First name"
          ref={firstNameRef}
          required
        />
        <input
          type="text"
          className="input"
          placeholder="Last name"
          ref={lastNameRef}
          required
        />
      </div>
      <input
        type="text"
        placeholder="Username"
        className="input"
        ref={usernameRef}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="input"
        id="email"
        ref={emailRef}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        ref={passwordRef}
        required
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="input"
        ref={confirmPasswordRef}
        required
      />
        {meesage && <p className="text-red-500 text-center">{meesage}</p>}
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
