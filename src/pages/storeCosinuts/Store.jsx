import React from 'react'
import Header from "../../subComponents/header/Header.jsx"
import NavbarBottom from "../../subComponents/navbarBottom/NavbarBottom.jsx"
import Footer from "../../subComponents/footer/Footer.jsx"
import MainStore from '../../subComponents/mainStore/MainStore.jsx'
const Store = () => {
    return (
        <>
            <div className="boxBlue">
                <Header />
                <MainStore />
            </div>
            <NavbarBottom />
            <Footer />
        </>
    );
}

export default Store