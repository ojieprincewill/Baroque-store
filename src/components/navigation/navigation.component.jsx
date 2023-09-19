import React from "react";

import "./navigation.styles.scss";

const Navigation = () => {
    return (
        <div className="navigation">
           <p className="logo">BAROQUE</p>
            <div className="pagelink-container">
                <p className="pagelink">Home</p>
                <p className="pagelink">Shop</p>
                <p className="pagelink">Features</p>
                <p className="pagelink">Blog</p>
                <p className="pagelink">About</p>
                <p className="pagelink">Contact</p>
            </div>
            <p className="carticon">Cart</p>
        </div>
    )
};

export default Navigation;