import React, {useState} from "react";
import Header from "../../subComponents/header/Header";
import NavbarBottom from "../../subComponents/navbarBottom/NavbarBottom";
import Footer from "../../subComponents/footer/Footer";
import MainAboutUs from "../../subComponents/mainAboutUs&Shipping/MainAboutUs";
const AboutUs = () => {
    return(
        <>
            <div className="boxBlue">
                <Header/>
                <MainAboutUs />
            </div>

            <NavbarBottom />
            <Footer />
        </>
    );
}

export default AboutUs