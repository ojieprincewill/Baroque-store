import React from "react";
import Navigation from "../navigation/navigation.component";
import Header from "../header/header.component";

import "./header-section.styles.scss";

const HeaderSection = () => {
    return (
        <div className="container">
            <Navigation/>
            <Header/>
        </div>
    )
};

export default HeaderSection;