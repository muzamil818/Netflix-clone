import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Enter your Name" />
          ) : (
            <></>
          )}

          <input type="Email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your Password" />
          <button className="signupBtn">Sign up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={()=>setSignState("Sign Up")}>Sign Up </span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={()=>setSignState("Sign In")}>Sign In  </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
