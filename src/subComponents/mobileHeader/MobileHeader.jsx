import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../mobileHeader/mobileHeader.css"

import mobileLogo from "../../assets/logo.svg"

const MobileHeader = () => {
    const [MobileMenu, setMobileMenu] = useState(false)

    return (
        <div className='mobileHeader'>
            <div className='mobileHeaderBlock'>
                <div className='mobileLogoBlock'>
                    <img src={mobileLogo} alt="Mobile Logo" />
                </div>
                <div className='mobileNumber'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p className='Phone'>
                        +7 (900) 232-32-3
                    </p>
                </div>
                <div className='mobileMenuBarBtnBlock'>
                    <button className='toggleHeaderBtn' onClick={() => setMobileMenu(!MobileMenu)}>
                        {
                            MobileMenu ? <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> : <FontAwesomeIcon icon={faXmark} />
                        }
                    </button>
                </div>
            </div>
            <ul className={MobileMenu ? 'listMobileMenu' : 'Moblist'}>
                <li className='listMobileItem'> <a href="/" className='listLink'>Главная</a></li>
                <li className='listMobileItem'> <a href="/catalog" className='listLink'>Каталог</a></li>
                <li className='listMobileItem'> <a href="/aboutus" className='listLink'>О нас</a></li>
                <li className='listMobileItem'> <a href="/aboutshipping" className='listLink'>О доставке</a></li>
                <li className='listMobileItem'> <a href="/store" className='listLink'>Магазины</a></li>
                <li className='listMobileItem'> <a href="/contact" className='listLink'>Контакты</a></li>
                <li className='listMobileItem'> <a href="/" className='Favorites'>Избранное</a></li>
                <li className='listMobileItem'> <a href='/' className='Box'>Корзина
                    <span className='Counter'>0</span>
                </a></li>
            </ul>
        </div >
    );
}

export default MobileHeader;