import React from "react";
import "./styles/App.scss";
import classNames from "classnames";
import { useForm, useFieldArray } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors, getValues } = useForm({
    mode: "onChange",
  });
  console.log(errors, "errors");
  const onSubmit = (data) => console.log(data);
  return (
    // <div className="App">
    //   <div className="container py-5">
    //     <div className="card border-0 shadow text-white text-center p-4 w-100 mx-auto">
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <div className="form-group">
    //           <label htmlFor="fullname">Full Name</label>
    //           <input
    //             type="text"
    //             className={classNames("form-control", {
    //               "is-invalid": errors.fullname,
    //             })}
    //             id="fullname"
    //             placeholder="Enter Your Full Name"
    //             name="fullname"
    //             ref={register({
    //               required: "This field is required",
    //               minLength: {
    //                 value: 4,
    //                 message: "full name should be more than 4 char",
    //               },
    //             })}
    //           />

    //           {errors.fullname && (
    //             <div className="invalid-feedback">
    //               {errors.fullname.message}
    //             </div>
    //           )}
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="email">E-mail Address</label>
    //           <input
    //             type="email"
    //             className={classNames("form-control", {
    //               "is-invalid": errors.email,
    //             })}
    //             id="email"
    //             placeholder="Enter Your E-mail Address"
    //             name="email"
    //             ref={register({
    //               required: "requiredfield",
    //               pattern: {
    //                 value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    //                 message: "inavlid email Id",
    //               },
    //             })}
    //           />
    //           {errors.email && (
    //             <div className="invalid-feedback">{errors.email.message}</div>
    //           )}
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="phone">Phone Number</label>
    //           <input
    //             type="text"
    //             className={classNames("form-control", {
    //               "is-invalid": errors.phone,
    //             })}
    //             id="phone"
    //             placeholder="Enter Your Phone Number"
    //             name="phone"
    //             ref={register({
    //               required: "Required",
    //               pattern: {
    //                 value: /^\d{10}$/,
    //                 message: "Enter 10 digit mobile number",
    //               },
    //             })}
    //           />
    //           {errors.phone && (
    //             <div className="invalid-feedback">{errors.phone.message}</div>
    //           )}
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="password">Password</label>
    //           <input
    //             type="password"
    //             className={classNames("form-control", {
    //               "is-invalid": errors.password,
    //             })}
    //             id="password"
    //             placeholder="Enter Your Password"
    //             name="password"
    //             ref={register({
    //               required: true,
    //               pattern: {
    //                 value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    //                 message: "Enter proper password",
    //               },
    //             })}
    //           />
    //           {errors.password && (
    //             <div className="invalid-feedback">
    //               {errors.password.message}
    //             </div>
    //           )}
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="state">Choose Your State</label>
    //           <select
    //             className={classNames("form-control", {
    //               "is-invalid": errors.state,
    //             })}
    //             id="state"
    //             name="state"
    //             ref={register({
    //               required: "required",
    //             })}
    //           >
    //             <option value="">--- Select Your State ---</option>
    //             <option value="Jharkhand">Jharkhand</option>
    //             <option value="Assam">Assam</option>
    //             <option value="Meghalaya">Meghalaya</option>
    //             <option value="Punjab">Punjab</option>
    //           </select>
    //           {errors.state && (
    //             <div className="invalid-feedback">{errors.state.message}</div>
    //           )}
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="gender" className="mr-4">
    //             Choose Your Gender
    //           </label>
    //           <div className="form-check form-check-inline">
    //             <input
    //               className="form-check-input"
    //               type="radio"
    //               id="male"
    //               value="male"
    //               name="gender"
    //               ref={register({
    //                 required: "required",
    //               })}
    //             />
    //             <label className="form-check-label" htmlFor="male">
    //               male
    //             </label>
    //           </div>
    //           <div className="form-check form-check-inline">
    //             <input
    //               className="form-check-input"
    //               type="radio"
    //               id="female"
    //               value="female"
    //               name="gender"
    //               ref={register({
    //                 required: "required",
    //               })}
    //             />
    //             <label className="form-check-input" htmlFor="female">
    //               female
    //             </label>
    //           </div>
    //           <div className="form-check form-check-inline">
    //             <input
    //               className="form-check-input"
    //               type="radio"
    //               id="other"
    //               value="other"
    //               name="gender"
    //               ref={register({
    //                 required: "required",
    //               })}
    //             />
    //             <label className="form-check-label" htmlFor="other">
    //               other
    //             </label>
    //           </div>
    //           {errors.gender && <p>{errors.gender.message}</p>}
    //         </div>
    //         <div className="form-group">
    //           <div className="form-check form-check-inline">
    //             <input
    //               className="form-check-input"
    //               type="checkbox"
    //               id="tnc"
    //               name="tnc"
    //               ref={register({
    //                 required: true,
    //               })}
    //             />
    //             <label className="form-check-label" htmlFor="tnc">
    //               I agree all terms conditions
    //             </label>
    //             <label className="form-check-label" htmlFor="tnc">
    //               practice
    //             </label>
    //           </div>
    //         </div>
    //         <button className="btn btn-primary">Create New Account</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="App">
      <div className="container py-5">
        <div className="card border-0 shadow text-white text-center p-4 w-100 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username">user Name</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.username,
                })}
                id="fullname"
                placeholder="Enter Your Full Name"
                name="username"
                ref={register({
                  required: "This field is required",
                  minLength: {
                    value: 4,
                    message: "full name should be more than 4 char",
                  },
                })}
              />

              {errors.username && (
                <div className="invalid-feedback">
                  {errors.username.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label forhtml="password">Password</label>
              <input
                type="password"
                name="password"
                className={classNames("form-control", {
                  "is-invalid": errors.password,
                })}
                placeholder="please enter password"
                ref={register({
                  required: true,
                  pattern: {
                    value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message: "please type password in correct format",
                  },
                })}
              />

              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label forhtml="password">Password</label>
              <input
                type="password"
                name="confirmpassword"
                className={classNames("form-control", {
                  "is-invalid": errors.confirmpassword,
                })}
                placeholder="please RE-enter password"
                ref={register({
                  required: true,
                  //value: (value) => value,
                  message: "password and confirm password not match",
                  validate: (value) =>
                    value === getValues("password") ||
                    "password does not match",
                })}
              />
              {errors.confirmpassword && (
                <div className="invalid-feedback">
                  {errors.confirmpassword.message}
                </div>
              )}
            </div>
            <submit type="submit">Submit</submit>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
