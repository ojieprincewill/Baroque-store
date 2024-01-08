import React, { useState } from "react";

import { FaRegUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import UserDropdown from "../user-dropdown/user-dropdown.component";

const UserIcon = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [showDrop, setShowDrop] = useState(false);

  const handleUserIconClick = () => {
    setShowDrop(!showDrop);
  };

  return (
    <div className="user-icon">
      {currentUser ? (
        <span className="user-display-name">{`Hi, ${currentUser.displayName}!`}</span>
      ) : null}
      <FaRegUser className="shopping-icon" onClick={handleUserIconClick} />
      {showDrop && <UserDropdown />}
    </div>
  );
};

export default UserIcon;
