import React from 'react';
import "../../subComponents/header/header.css"

const Header = () => {
    return (
        <div className='header'>
            <span cladsName='logo'></span>
            <ul className='list'>
                <li className='listItem'><a className='listLink'></a></li>
                <li className='listItem'><a className='listLink'></a></li>
                <li className='listItem'><a className='listLink'></a></li>
                <li className='listItem'><a className='listLink'></a></li>
                <li className='listItem'><a className='listLink'></a></li>
                <li className='listItem'><a className='listLink'></a></li>
            </ul>
            <p className='phone'>

            </p>
        </div>
    )
}

export default Header;