import React, { useState } from 'react';
import "../home/Home.css"

import CatalogCard from '../../subComponents/card/CatalogCard';
import Header from "../../subComponents/header/Header";
import Main from "../../subComponents/main/Main";
import NavbarBottom from '../../subComponents/navbarBottom/NavbarBottom';
import Footer from '../../subComponents/footer/Footer';

const Home = () => {
    return (
        <>
            <div className='boxBlue'>
                <Header />
                <Main />
            </div>
            <CatalogCard />
            <NavbarBottom />
            <Footer />
        </>
    )
}

export default Home