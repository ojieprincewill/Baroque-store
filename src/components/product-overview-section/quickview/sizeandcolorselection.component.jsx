import React from "react";

import "./sizeandcolorselection.styles.scss";

const Sizes = ["Choose an option", "Size S", "Size M", "Size L", "Size XL"];
const Colors = ["Choose an option", "Black", "Blue", "Grey", "Green"];

const SizeAndColor = () => {
  return (
    <div className="drop-grid">
      <div className="dropdown">
        <label className="drop-label">Size:</label>
        <select id="size" defaultValue="" className="drop-select">
          <option value="" disabled className="drop-option">
            Select Size
          </option>
          {Sizes.map((size, index) => (
            <option key={index} value={size} className="drop-option">
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown">
        <label className="drop-label">Color:</label>
        <select id="color" defaultValue="" className="drop-select">
          <option value="" disabled className="drop-option">
            Select Color
          </option>
          {Colors.map((color, index) => (
            <option key={index} value={color} className="drop-option">
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SizeAndColor;
