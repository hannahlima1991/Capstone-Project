import * as React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { register, errors, handleSubmit, clearErrors } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("name", response.user.name);
          console.log(response);
          props.history.push("/dashboard");
        } else {
          props.history.push("/login");
        }
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
};

export default Login;
