import React, { useState } from "react";
import "./login.style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [altMessage, setAltMessage] = useState("");
  let navigate = useNavigate();
  function onSubmitLogin(e) {
    e.preventDefault();
    let data = {
      name: "",
      username: Email,
      password: Password,
    };
    // here /login is backend server link path. backend server link is added in package.json as proxy.
    axios
      .post("/login", data)
      .then((resp) => {
        if (resp.data == "login successfully") {
          navigate("/home");
        }
        setAltMessage(resp.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: 185 }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The RaddP Team
                        </h4>
                      </div>
                      <form onSubmit={onSubmitLogin}>
                        <p>Please login to your account</p>
                        <div className="form-floating mb-4">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-4">
                          <input
                            type="password"
                            id="floatingInput"
                            className="form-control"
                            placeholder="password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label htmlFor="floatingInput">Password</label>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <p>{altMessage}</p>
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 ps-5 pe-5"
                            type="submit"
                          >
                            Log in
                          </button>
                          <br />
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <a
                            type="button"
                            className="btn btn-outline-danger"
                            href="/registration"
                          >
                            Create new
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
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
