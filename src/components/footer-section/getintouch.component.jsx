import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import "./getintouch.styles.scss";

const GetInTouch = () => {
  return (
    <div>
      <h3 className="info-title">GET IN TOUCH</h3>
      <div className="infotext-container">
        <p className="info-text">
          Any questions? Let us know in store at 8th floor, 379 Hudson St, New
          York, NY 10018 or call us on (+1) 96 716 6879
        </p>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faFacebookF} className="intouch-icon" />
        <FontAwesomeIcon icon={faInstagram} className="intouch-icon" />
        <FontAwesomeIcon icon={faPinterestP} className="intouch-icon" />
      </div>
    </div>
  );
};

export default GetInTouch;
