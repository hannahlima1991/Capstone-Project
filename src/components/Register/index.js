import * as React from "react";
import "./register.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, errors, handleSubmit, clearErrors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="resgistrationForm">
        <div className="textInput">
          <input
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            size="28"
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
            ref={register({ required: true })}
          />
          {errors.email ? (
            <p style={{ color: "black" }}>Email is invalid.</p>
          ) : null}
        </div>
        <div className="textInput">
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            size="28"
            ref={register({ required: true, minLength: 8 })}
          />
          {errors.password ? (
            <p style={{ color: "black" }}>
              Password is invalid,minimun 8 characters.
            </p>
          ) : null}
        </div>
        {/* <button type="button" onClick={() => clearErrors("firstName")}>
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
        </button> */}
        <div className="submitButton">
          <button
            type="submit"
            class="btn btn-outline-success btn-lg btn-block"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
