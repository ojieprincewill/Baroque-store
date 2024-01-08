import React from "react";

import "./account-details.styles.scss";

import { useSelector } from "react-redux";

const AccountDetails = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="account-details">
      <div className="account-header-cont">
        <p className="account-header">Account details</p>
      </div>
      <div className="details-cont">
        {currentUser ? (
          <div>
            <p className="username">{currentUser.displayName}</p>
            <p className="email">{currentUser.email}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AccountDetails;
