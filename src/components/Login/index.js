import * as React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, errors, handleSubmit, clearErrors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("token", response.token);
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="email">
          <input
            name="email"
            type="text"
            placeholder="Enter Email"
            size="28"
            ref={register({ required: true })}
          />
          {errors.email ? (
            <p style={{ color: "black" }}>Email is required.</p>
          ) : null}
        </div>
        <div className="password">
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            size="28"
            ref={register({ required: true, minLength: 8 })}
          />
          {errors.password ? (
            <p style={{ color: "black" }}>Password is invalid.</p>
          ) : null}
        </div>
        <div className="loginButton">
          <Link to="/dashboard">
            <button
              type="submit"
              class="btn btn-outline-success btn-lg btn-block"
            >
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
