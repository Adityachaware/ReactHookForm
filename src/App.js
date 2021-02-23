import React from "react";
import "./styles/App.scss";
import { useForm, useFieldArray } from "react-hook-form";

function App() {
  const { register, handleSubmit, control } = useForm();

  const UserInformation = (props) => {
    const { register, control } = props;
    const { append, fields, remove } = useFieldArray({
      control,
      name: "users",
    });

    return (
      <>
        <form>
          {fields.map((item, index) => (
            <div className="form-row form-group">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First name"
                  name={`users[${index}].firstName`}
                  ref={register()}
                  defaultValue={item.firstName}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last name"
                  name={`users[${index}].lastName`}
                  ref={register()}
                  defaultValue={item.lastName}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your E-mail Address"
                  name={`users[${index}].email`}
                  ref={register()}
                  defaultValue={item.email}
                />
              </div>
              <div className="col">
                <select
                  className="form-control"
                  id="state"
                  ref={register()}
                  name={`users[${index}].state`}
                  defaultValue={item.state}
                >
                  <option value="">Select Your State</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Assam">Assam</option>
                  <option value="Goa">Goa</option>
                  <option value="Manipur">Manipur</option>
                </select>
              </div>
              <div className="col">
                <button type="button" onClick={() => remove(index)}>
                  delete
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              append({
                firstName: " ",
                lastName: " ",
                email: " ",
                state: " ",
              })
            }
          >
            Add User
          </button>
        </form>
      </>
    );
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="container py-5">
        <div className="card border-0 shadow p-4 w-50 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                ref={register}
                name="address.fullname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                ref={register}
                name="address.email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                ref={register}
                name="address.phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                ref={register}
                name="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                ref={register}
                name="password[0]"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                ref={register}
                name="password[1]"
              />
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  ref={register}
                  name="gender"
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  ref={register}
                  name="gender"
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  ref={register}
                  value="other"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
            </div>
            <div className="form-group">
              <select className="custom-select" ref={register} name="state">
                <option value="">Select your state</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  value="agree"
                  name="terms"
                  ref={register}
                />
                <label className="form-check-label" for="terms">
                  I agree all terms and conditons
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="updates"
                  name="updates"
                  ref={register}
                />
                <label className="form-check-label" for="updates">
                  send me latest Bootstrap updates
                </label>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <UserInformation register={register} control={control} />
      </div>
    </div>
  );
}

export default App;
