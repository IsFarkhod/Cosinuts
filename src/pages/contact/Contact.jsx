import React, { useState } from "react";
import Header from "../../subComponents/header/Header";
import MainContact from "../../subComponents/mainContact/MainContact";
import NavbarBottom from "../../subComponents/navbarBottom/NavbarBottom";
import Footer from "../../subComponents/footer/Footer";

const Contact = () => {
    return (
        <>
        <div className="boxBlue">
                <Header />
        </div>
            <NavbarBottom />
            <Footer/>
        </>
    );
}

export default Contact