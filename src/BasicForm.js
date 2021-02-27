import React from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
const BasicForm = () => {
  const { register, errors } = useFormContext();
  return (
    <div>
      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className={classNames("form-control", {
            "is-invalid": errors.fullname,
          })}
          id="fullname"
          placeholder="Enter Your Full Name"
          name="fullname"
          ref={register({
            required: "This field is required",
            minLength: {
              value: 4,
              message: "full name should be more than 4 char",
            },
          })}
        />

        {errors.fullname && (
          <div className="invalid-feedback">{errors.fullname.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          className={classNames("form-control", {
            "is-invalid": errors.email,
          })}
          id="email"
          placeholder="Enter Your E-mail Address"
          name="email"
          ref={register({
            required: "requiredfield",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "inavlid email Id",
            },
          })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          className={classNames("form-control", {
            "is-invalid": errors.phone,
          })}
          id="phone"
          placeholder="Enter Your Phone Number"
          name="phone"
          ref={register({
            required: "Required",
            pattern: {
              value: /^\d{10}$/,
              message: "Enter 10 digit mobile number",
            },
          })}
        />
        {errors.phone && (
          <div className="invalid-feedback">{errors.phone.message}</div>
        )}
      </div>
    </div>
  );
};

export default BasicForm;
