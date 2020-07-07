import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <form className="form">
        <div className="userName">
          <input type="text" placeholder="Enter User Name" size="25" />
        </div>
        <div className="password">
          <input type="password" placeholder="Enter Password" size="25" />
        </div>
        <div className="confirmPassword">
          <input type="password" placeholder="Confirm Password" size="25" />
        </div>
        <div className="loginButton">
          <button
            type="submit"
            class="btn btn-outline-success btn-lg btn-block"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
