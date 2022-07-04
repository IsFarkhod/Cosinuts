import React from 'react';
import Header from "../../subComponents/header/Header";
import NavbarBottom from "../../subComponents/navbarBottom/NavbarBottom";
import Footer from "../../subComponents/footer/Footer";
import CardPattern from '../../subComponents/cardPattern/CardPattern';

const CardItem = () => {
    return (
        <>
            <div className='boxBlue'>
                <Header />
            </div>
            <CardPattern/>
            <NavbarBottom />
            <Footer />
        </>
    );
}

export default CardItem;