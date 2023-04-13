import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import RegistrationImage from "../images/—Pngtree—colorful register now vector png_8388263.png";
import axios from "axios";
export const Register = () => {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, setPassword] = useState("");

  function onRegistration() {
    let data = {
      name: Name,
      username: Email,
      password: Password,
    };
    // here /register is backend server link path. backend server link is added in package.json as proxy.
    axios.post("/register", data).then((resp) => alert(resp.data));
  }
  return (
    <div>
      <section className="m-5" style={{ backgroundColor: "#eee" }}>
        <div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="text-black rounded">
                <div className="">
                  <div className="row ">
                    <div className="card col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 p-md-5">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={onRegistration}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="fa-lg me-3 fa-fw"
                          />
                          <div className="form-floating flex-fill mb-0">
                            <input
                              type="Name"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name"
                              value={Name}
                              onChange={(e) => SetName(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Your Name</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="fa-lg me-3 fa-fw"
                          />
                          <div className="form-floating flex-fill mb-3">
                            <input
                              type="email"
                              className="form-control"
                              value={Email}
                              id="floatingInput"
                              placeholder="name@example.com"
                              onChange={(e) => SetEmail(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FontAwesomeIcon
                            icon={faKey}
                            className="fa-lg me-3 fa-fw"
                          />
                          <div className="form-floating flex-fill">
                            <input
                              type="password"
                              className="form-control"
                              id="floatingPassword"
                              placeholder="Password"
                              value={Password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FontAwesomeIcon
                            icon={faKey}
                            className="fa-lg me-3 fa-fw"
                          />
                          <div className="form-floating flex-fill">
                            <input
                              type="password"
                              className="form-control"
                              id="floatingPassword"
                              placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">
                              Repeat Your Password
                            </label>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg gradient-custom-2"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 gradient-custom-2 ">
                      <img
                        src={RegistrationImage}
                        className="img-fluid d-flex justify-content-center my-auto"
                        alt="Sample image"
                        width={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
