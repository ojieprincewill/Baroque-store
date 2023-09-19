import React from "react";

import "./filter-button.styles.scss";

const FilterButton = ({ onClick }) => {
  // const [active, setActive] = useState(false);

  // const handleButtonClick = () => {
  //   setActive(!active);
  //   onClick();
  // };

  return (
    <div>
      <button className="filter-btn" onClick={onClick}>
        Filter
      </button>
    </div>
  );
};

export default FilterButton;
