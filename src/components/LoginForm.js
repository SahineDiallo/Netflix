import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../utils/Auth";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await SignIn(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      return setError(error.message);
    }
    // Means the user has been created
    navigate("/");
  };
  return (
    <div className="form__container_one">
      <h1>Sign In</h1>
      {error && (
        <span className="alert alert-danger d-inline-block mt-3">{error}</span>
      )}
      <form action="">
        <label htmlFor="">Email</label>
        <input ref={emailRef} type="email" placeholder="Enter a username" />
        <label htmlFor="">Password</label>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter a password"
        />
        <button onClick={handleSignIn} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
