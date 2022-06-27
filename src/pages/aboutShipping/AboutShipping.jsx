import React, { useState } from 'react';

import "../../pages/aboutShipping/aboutShipping.css";

import Header from "../../subComponents/header/Header.jsx"
import Footer from "../../subComponents/footer/Footer.jsx"
import NavbarBottom from '../../subComponents/navbarBottom/NavbarBottom';
import MainAboutShipping from '../../subComponents/mainAboutUs&Shipping/MainAboutShipping';

const AboutShipping = () => {
    return (
        <>
            <div className="boxBlue">
                <Header/>
                <MainAboutShipping/>
            </div>
            <NavbarBottom />
            <Footer />
        </>
    );
}

export default AboutShipping