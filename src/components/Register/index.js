import * as React from "react";
import "./register.css";
// import { useForm } from "react-hook-form";

// const Register = () => {
//   const { register, errors, handleSubmit, clearErrors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

const Register = () => {
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <div className="wrapper">
      <form className="resgistrationForm">
        <div className="textInput">
          <input
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            size="28"
            // ref={register({ required: true })}
          />
        </div>
        <div className="textInput">
          <input
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
            size="28"
            // ref={register({ required: true })}
          />
        </div>
        <div className="textInput">
          <input
            name="userName"
            type="text"
            placeholder="Enter User Name"
            size="28"
            // ref={register({ required: true })}
          />
        </div>
        <div className="textInput">
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            size="28"
            // ref={register({ required: true })}
          />
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
