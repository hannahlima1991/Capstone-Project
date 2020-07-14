import * as React from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = (props) => {
  const { register, errors, handleSubmit, clearErrors } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:8000/registers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.id) {
          props.history.push("/");
        } else {
          setErrorMessage("Email is already being used");
        }
      });
  };
  // const userInput = {input.value};
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="resgistrationForm">
        <div className="RegisterTitle">
          <p style={{ color: "#28A745" }}>First Time Here? Make An Account.</p>
        </div>
        <div className="textInput">
          <input
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            size="28"
            // value={input.value}
            ref={register({ required: true })}
          />
          {errors.firstName ? (
            <p style={{ color: "black" }}>First name is required.</p>
          ) : null}
        </div>
        <div className="textInput">
          <input
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
            size="28"
            // value={input.value}
            ref={register({ required: true })}
          />
          {errors.lastName ? (
            <p style={{ color: "black" }}>Last name is required.</p>
          ) : null}
        </div>
        <div className="textInput">
          <input
            name="email"
            type="text"
            placeholder="Enter email"
            size="28"
            // value={input.value}
            ref={register({ required: true })}
          />
          {errors.email ? (
            <p style={{ color: "black" }}>Email is required/invalid.</p>
          ) : null}
        </div>
        <div className="textInput">
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            size="28"
            // value={input.value}
            ref={register({ required: true, minLength: 8 })}
          />
          {errors.password ? (
            <p style={{ color: "black" }}>
              Password is invalid,minimun 8 characters.
            </p>
          ) : null}
        </div>
        <div className="submitButton">
          {/* <Link to="/"> */}
          <button
            type="submit"
            class="btn btn-outline-success btn-lg btn-block"
          >
            Register
          </button>
          <p style={{ color: "black" }}>{errorMessage}</p>
        </div>
      </form>
    </div>
  );
};
export default Register;

{
  /* <button type="button" onClick={() => clearErrors("firstName")}>
          Clear First Name Errors
        </button>
        <button
          type="button"
          onClick={() => clearErrors(["firstName", "lastName"])}
        >
          Clear First and Last Name Errors
        </button>
        <button type="button" onClick={() => clearErrors()}>
          Clear All Errors
        </button> */
}
