import React, { Component } from "react";
import { Row, } from "react-materialize";

// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./CustContact.css";

class CustContact extends Component {
  render() {
    return (
      <div className="container ">
        <Row>
          <h3>
            <i className="mdi-content-send brown-text" />
          </h3>
          <h4 className="center">Contact Me</h4>

          <div
            className="col l12 m12 s12 center formEmail"
            role="form"
            action="https://postmail.invotes.com/send"
            method="post"
            id="email_form"
          >
            <div className="form-group">
              <input
                className="rounded form-control"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="rounded form-control"
                name="text"
                placeholder="Message"
                id="message"
                maxLength="140"
                rows="7"
              />
              <span
                id="contact"
                className="section scrollspy"
               
              >
                <p id="characterLeft" className="help-block ">
                  You have reached the limit
                </p>
              </span>
            </div>

            <input
              type="hidden"
              name="access_token"
              value="eqhitskqjijhat94ecddwtzc"
            />
            {/* <!-- return urls can be fully qualified -OR-
                 start with / for root relative -OR-
                 start with . for url relative --> */}
            <input
              type="hidden"
              name="success_url"
              value=".?message=Email+Successfully+Sent%21&isError=0"
            />
            <input
              type="hidden"
              name="error_url"
              value=".?message=Email+could+not+be+sent.&isError=1"
            />

            {/* <!-- set the reply-to address --> */}
            <div className="form-group">
              <input
                className="rounded form-control"
                type="text"
                name="reply_to"
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <input
                className="rounded form-control"
                type="text"
                name="extra_phone_number"
                placeholder="Phone Number"
              />
            </div>

           

            <input
              className="btn waves-effect waves-blue blue"
              id="submit_form"
              type="submit"
              value="Send"
            />
          </div>
        </Row>
      </div>
    );
  }
}
export default CustContact;
