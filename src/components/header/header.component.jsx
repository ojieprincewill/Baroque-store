import React from "react";
import { motion } from "framer-motion";

import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="small"
      >
        New Season
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="large"
      >
        ALL NEW COLLECTIONS
      </motion.p>
      <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="btn"
        >
          <button className="shop-btn">SHOP NOW</button>
        </motion.div>
      </Link>
    </div>
  );
};

export default Header;
