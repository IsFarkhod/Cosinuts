import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.svg';
import "../../subComponents/header/header.css"
import MobileHeader from '../mobileHeader/MobileHeader';

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("activeScroll", window.scrollY > 500)
    })

    return (
        <>
            <div className='header'>
                <div className='headerLeftBlock'>
                    <img src={logo} className="headerLogo"/>
                    <ul className='list'>
                        <li className='listItem'><a href='/' className="listLink">Главная</a></li>
                        <li className='listItem'><a href='/catalog' className='listLink'>Каталог</a></li>
                        <li className='listItem'><a href='/aboutus' className="listLink" >О нас</a></li>
                        <li className='listItem'><a href='/aboutshipping' className='listLink'>О доставке</a></li>
                        <li className='listItem'><a href='/store' className='listLink'>Магазины</a></li>
                        <li className='listItem'><a href='/contact' className='listLink'>Контакты</a></li>
                    </ul>
                </div>
                <div className='headerRightBlock'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p className='Phone'>
                        +7 (900) 232-32-32
                    </p>
                    <a href='/' className='Favorites'>Избранное</a>
                    <a href='/' className='Box'>Корзина
                        <span className='Counter'>0</span>
                    </a>
                </div>
            </div>
            <div className='mob'>
                <MobileHeader />
            </div>
        </>

    )
}

export default Header;