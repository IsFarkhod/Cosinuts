import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.svg';
import "../../subComponents/header/header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='headerLeftBlock'>
                <img src={logo} />
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
                <p className='Box'>Корзина
                    <span className='Counter'>0</span>
                </p>
            </div>
        </div>
    )
}

export default Header;