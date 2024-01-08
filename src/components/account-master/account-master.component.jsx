import React, { useState, useEffect, useMemo } from "react";

import "./account-master.styles.scss";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { useNavigate, Link, Routes, Route } from "react-router-dom";

import AccountOverview from "../account-overview/account-overview.component";
import Orders from "../orders/orders.component";
import AddressDetails from "../address-details/address-details.component";
import AccountSettings from "../account-settings/account-settings.component";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";
import { RiSettingsLine } from "react-icons/ri";

const AccountMaster = () => {
  const options = useMemo(
    () => [
      {
        label: "My Baroque Account",
        path: "overview",
        icon: <FaRegUser />,
        component: <AccountOverview />,
      },
      {
        label: "Orders",
        path: "orders",
        icon: <LuShoppingBag />,
        component: <Orders />,
      },
      {
        label: "Address",
        path: "address",
        icon: <FaRegAddressCard />,
        component: <AddressDetails />,
      },
      {
        label: "Account settings",
        path: "settings",
        icon: <RiSettingsLine />,
        component: <AccountSettings />,
      },
    ],
    []
  );

  const [selectedOption, setSelectedOption] = useState(
    parseInt(localStorage.getItem("selectedOptionIndex"), 10) || 0
  );

  const navigate = useNavigate();

  const [isDetailsVisible, setDetailsVisibility] = useState(false);

  const isPhoneScreen = window.innerWidth <= 600;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  useEffect(() => {
    const currentOption = options[selectedOption];
    if (currentOption) {
      navigate(`/account/${currentOption.path}`);
    }
  }, [selectedOption, options, navigate]);

  useEffect(() => {
    localStorage.setItem("selectedOptionIndex", selectedOption);
  }, [selectedOption]);

  if (isPhoneScreen) {
    const handleOptionClick = (option) => {
      setSelectedOption(option.label);
      setDetailsVisibility(true);
    };

    const handleBackButtonClick = () => {
      setDetailsVisibility(false);
    };

    return (
      <div className="account-container">
        <div className={`account-master ${isDetailsVisible ? "hidden" : ""}`}>
          {options.map((option) => (
            <Link
              key={option.label}
              to={`/account/${option.path}`}
              className={`master-option`}
              onClick={() => handleOptionClick(option)}
            >
              <span className="master-icon">{option.icon}</span>
              {option.label}
            </Link>
          ))}
          <div className="log-btn-cont">
            <button className="log-btn" onClick={handleSignOut}>
              Log out
            </button>
          </div>
        </div>
        <div className={`details ${isDetailsVisible ? "visible" : "hidden"}`}>
          <button className="back-btn" onClick={handleBackButtonClick}>
            back
          </button>
          <Routes>
            {options.map((option) => (
              <Route
                key={option.label}
                path={`/${option.path}`}
                element={option.component}
              />
            ))}
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <div className="account-container">
      <div className="account-master">
        {options.map((option, index) => (
          <Link
            key={option.label}
            to={`/account/${option.path}`}
            className={`master-option ${
              selectedOption === index ? "active" : ""
            }`}
            onClick={() => setSelectedOption(index)}
          >
            <span className="master-icon">{option.icon}</span>
            {option.label}
          </Link>
        ))}
        <div className="log-btn-cont">
          <button className="log-btn" onClick={handleSignOut}>
            Log out
          </button>
        </div>
      </div>
      <div className="details">
        <Routes>
          {options.map((option) => (
            <Route
              key={option.label}
              path={`/${option.path}`}
              element={option.component}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default AccountMaster;
