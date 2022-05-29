import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { set_username } from "../store/slices/userSlice.js";
import { SignUp } from "../utils/Auth.js";

const RegistrationForm = ({ email }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords must match!");
    }
    try {
      setError("");
      await SignUp(email, passwordRef.current.value);
      dispatch(
        set_username({
          username: usernameRef.current.value,
        })
      );
    } catch (error) {
      setError(error.message);
    }
    // Means the user has been created
    return <Navigate to="/" replace />;
  };
  return (
    <div className="form__container_one">
      <h1>Joining Netflix</h1>

      <p>Email: {email}</p>
      {error && (
        <span className="alert alert-danger d-inline-block mt-3">{error}</span>
      )}
      <form action="">
        <label htmlFor="">Username</label>
        <input ref={usernameRef} type="text" placeholder="Enter a username" />
        <label htmlFor="">Password</label>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter a password"
        />
        <label htmlFor="">Confirm Password</label>
        <input
          ref={confirmPasswordRef}
          type="password"
          placeholder="Re-Enter a password"
        />
        <button onClick={handleSignUp} type="submit">
          Sign Up Now
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
