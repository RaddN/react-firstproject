import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import contactimage from "../component/images/Lovepik_com-450036029- contact us online.png";
export default class ContactPage extends Component {
  render() {
    return (
      <div className="Container ms-5 me-5">
        <div className="row">
          <div className="col-md-6">
            <img className="my-auto" src={contactimage} alt="" width={600} />
          </div>
          <div className="col-md-5 card p-5">
            <h3 className="text-center">Contact Us</h3>
            <p>
              Ut ad eu et est dolor dolore eiusmod reprehenderit cillum officia
              ex dolor sunt et. In nulla do reprehenderit reprehenderit labore
              labore.
            </p>
            <form>
              {/* Name input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form4Example1">
                  Name
                </label>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form4Example2">
                  Email address
                </label>
              </div>
              {/* Message input */}
              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows={4}
                  defaultValue={""}
                />
                <label className="form-label" htmlFor="form4Example3">
                  Message
                </label>
              </div>
              {/* Checkbox */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  defaultValue
                  id="form4Example4"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form4Example4">
                  Send me a copy of this message
                </label>
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
