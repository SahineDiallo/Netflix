import React, { useState, useRef } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Login = () => {
    const user = auth.currentUser;
    console.log(user);
  const ValidateEmail = (inputText) => {
    var mailformat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return inputText.match(mailformat) ? true : false;
  };
  const [authState, setAuthState] = useState("0");
  const [error, setError] = useState("");
  const emailRef = useRef();
  const handleSignUp = (e) => {
    e.preventDefault();
    if (emailRef.current.value) {
      ValidateEmail(emailRef.current.value)
        ? setAuthState("2")
        : setError("Please enter a valid email");
    } else {
      setError("An email is required to create an account");
    }
  };
  return (
    <div className="login__container position-relative">
      <div className="login__header">
        <Link to="/">
          <img
            onClick={() => {
              setAuthState("0");
            }}
            className="login__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
        </Link>
        <button
          className="login__button"
          onClick={() => {
            setAuthState("1");
          }}
        >
          Sign In
        </button>
        <div className="login__background"></div>
      </div>
      <div className="login__content">
        <div className="login__body">
          {(() => {
            if (authState === "0") {
              return (
                <>
                  <h1>Unlimited Films, TV programmes and more</h1>
                  <h3>Watch anywhere, Cancel at any time</h3>
                  <p>
                    Ready to watch? Enter your email to create or restart your
                    membership
                  </p>
                  <div className="form__container">
                    <form className="get_started__form">
                      <input
                        type="text"
                        placeholder="enter your email"
                        required
                        ref={emailRef}
                      />
                      <button type="submit" onClick={handleSignUp}>
                        GET STARTED
                      </button>
                    </form>
                  </div>
                  {error && (
                    <span className="d-inline-block mt-3 alert alert-danger">
                      {error}
                    </span>
                  )}
                </>
              );
            } else if (authState === "1") {
              return <LoginForm />;
            } else {
              return <RegistrationForm email={emailRef.current.value} />;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Login;
