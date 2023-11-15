import React from "react";

import "./footer-section.styles.scss";
import Categories from "./categories.component";
import Help from "./help.component";
import GetInTouch from "./getintouch.component";
import NewsLetter from "./newsletter.component";
import CopyRight from "./copyright.component";
import PaymentLinks from "./paymentlinks.component";

const FooterSection = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <Categories />
        <Help />
        <GetInTouch />
        <NewsLetter />
      </div>
      <PaymentLinks />
      <CopyRight />
    </div>
  );
};

export default FooterSection;
