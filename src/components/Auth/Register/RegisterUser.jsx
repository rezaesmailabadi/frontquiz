import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();

  const [userField, setUserField] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    //console.log(userField);
  };

  console.log(userField);
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/register-user",
        userField
      );
      navigate("/user/dashboard");
    //   console.log(userField);
      console.log(responce);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center">Student Register</h1>
              <form class="mt-4">
                <div class="form-group row">
                  <label
                    for="name"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    Name
                  </label>

                  <div class="col-md-6">
                    <input
                      id="name"
                      type="text"
                      class="form-control @error('name') is-invalid @enderror"
                      name="name"
                      onChange={(e) => changeUserFieldHandler(e)}
                      required
                      autocomplete="name"
                      autofocus
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="email"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    E-Mail Address
                  </label>

                  <div class="col-md-6">
                    <input
                      id="email"
                      type="email"
                      class="form-control @error('email') is-invalid @enderror"
                      name="email"
                      onChange={(e) => changeUserFieldHandler(e)}
                      required
                      autocomplete="email"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="password"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    Password
                  </label>

                  <div class="col-md-6">
                    <input
                      id="password"
                      type="password"
                      class="form-control @error('password') is-invalid @enderror"
                      name="password"
                      onChange={(e) => changeUserFieldHandler(e)}
                      required
                      autocomplete="new-password"
                    />
                  </div>
                </div>

                {/* <div class="form-group row">
                  <label
                    for="password-confirm"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    Confirm Password
                  </label>

                  <div class="col-md-6">
                    <input
                      id="password-confirm"
                      type="password"
                      class="form-control"
                      name="password_confirmation"
                      onChange={(e) => changeUserFieldHandler(e)}
                      required
                      autocomplete="new-password"
                    />
                  </div>
                </div> */}

                <div class="mb-0 form-group row">
                  <div class="col-md-6 offset-md-4">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={(e) => onSubmitChange(e)}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <NavLink to="/">home</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
