import React from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
const ContactForm = () => {
    const { register, errors } = useFormContext();
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="ambulance">Full Name</label>
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.ambulance,
              })}
              id="fullname"
              placeholder="Enter Your Full Name"
              name="ambulance"
              ref={register({
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "full name should be more than 4 char",
                },
              })}
            />

            {errors.ambulance && (
              <div className="invalid-feedback">{errors.ambulance.message}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="police">E-mail Address</label>
            <input
              type="email"
              className={classNames("form-control", {
                "is-invalid": errors.email,
              })}
              id="police"
              placeholder="Enter Your E-mail Address"
              name="police"
              ref={register({
                required: "requiredfield",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "inavlid email Id",
                },
              })}
            />
            {errors.police && (
              <div className="invalid-feedback">{errors.police.message}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="doctor">Phone Number</label>
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.phone,
              })}
              id="doctor"
              placeholder="Enter Your Phone Number"
              name="doctor"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Enter 10 digit mobile number",
                },
              })}
            />
            {errors.doctor && (
              <div className="invalid-feedback">{errors.doctor.message}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
