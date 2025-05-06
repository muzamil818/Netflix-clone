import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="logo" className="login-logo" />
      <div className="login-form">
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder="Enter your Name" />
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
      </div>
    </div>
  );
};

export default Login;
