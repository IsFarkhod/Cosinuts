import React from "react";

import "../catalog/catalog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import Header from "../../subComponents/header/Header";
import NavbarBottom from "../../subComponents/navbarBottom/NavbarBottom";
import Footer from "../../subComponents/footer/Footer";
import Sidebar from "../../subComponents/sidebar/Sidebar";
import CardBlock from "../../subComponents/card/CardBlock";

const Catalog = () => {
    return (
        <>
            <div className="boxBue">
                <Header />
            </div>
            <div className="catalogTitleBlock">
                <h2 className="catalogTitle">Наш ассортимент</h2>
            </div>

            <div className="cardBar">
                <div className="cardLeftBar">
                    <Sidebar />
                </div>
                <div className="cardRightBar">
                    <div className="cardTopBar">
                        <div className="cardTopLeft">
                            <ul className="cardBarList">
                                <li className="cardBarItem">
                                    <span className="cardBarLeftBtn">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </span>
                                </li>
                                <li className="cardBarItem">
                                    <span className="cardBarNavigation">1</span>
                                </li>
                                <li className="cardBarItem">
                                    <span className="cardBarNavigation">2</span>
                                </li>
                                <li className="cardBarItem">
                                    <span className="cardBarNavigation">3</span>
                                </li>
                                <li className="cardBarItem">
                                    <span className="cardBarNavigation">4</span>
                                </li>
                                <li className="cardBarItem">
                                    <span className="cardBarNavigation">5</span>
                                </li>
                                <li className="cardBarItem">
                                    <span className="cardBarRightBtn">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="cardTopRight">
                            <div className='searchBlock'>
                                <input className='searchInput' placeholder='Кешью Австралийский' />
                                <button type='submit' className='searchBtn'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cardCenterBar">
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                    </div>
                </div>
            </div>
            <NavbarBottom />
            <Footer />
        </>
    );
}

export default Catalog