import React from "react";

import "./user-dropdown.styles.scss";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const UserDropdown = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const handleAccountLink = () => {
    if (!currentUser) {
      localStorage.setItem("intendedAccountUrl", "/account");
      navigate("/signin");
    } else {
      navigate("/account");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="user-dropdown">
      {currentUser ? (
        <span className="drop-option" onClick={handleSignOut}>
          Sign out
        </span>
      ) : (
        <Link
          to="/signin"
          onClick={() => window.scrollTo(0, 0)}
          className="drop-option"
        >
          Sign in
        </Link>
      )}

      <span className="drop-option" onClick={handleAccountLink}>
        my account
      </span>
    </div>
  );
};

export default UserDropdown;
