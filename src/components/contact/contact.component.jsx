import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <h2 className="headertext">Contact</h2>
      </div>
      <div className="contactgrid">
        <form className="contactform">
          <p className="formtitle">Send us a message</p>
          <div className="forminputcontainer">
            <FontAwesomeIcon icon={faEnvelope} className="envelope" />
            <input
              type="text"
              placeholder="Your Email Address"
              className="input"
            />
          </div>
          <div className="textareacontainer">
            <textarea
              placeholder="How Can We Help?"
              className="contacttextarea"
            />
          </div>
          <button className="submitbtn">Submit</button>
        </form>
        <div className="contactcontainer">
          <div className="contactflex">
            <FontAwesomeIcon icon={faLocationDot} className="addressicon" />
            <div className="textcont">
              <p className="heading">Address</p>
              <p className="subtext">
                Coza Store Center 8th floor, 379
                <br /> Hudson St, New York, NY 10018 US
              </p>
            </div>
          </div>
          <div className="contactflex">
            <FontAwesomeIcon icon={faPhone} className="addressicon" />
            <div className="textcont">
              <p className="heading">Let's Talk</p>
              <p className="subtext2">+1 800 1236879</p>
            </div>
          </div>
          <div className="contactflex">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="addressicon" />
            <div className="textcont">
              <p className="heading">Sale Support</p>
              <p className="subtext2">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
