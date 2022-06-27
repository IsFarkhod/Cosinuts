import React from 'react';

import "../card/CatalogCard.css";
import CardBlock from './CardBlock';

const CatalogCard = () => {
    return (
        <div className='boxContainer'>
            <div className='boxTitle'>
                <h4 className='cardTitle'>
                    Наш ассортимент
                </h4>
            </div>
            <ul className='navbarList'>
                <li className='navbarItem'><p className='navbarLink'>Сухофрукты экзотические</p></li>
                <li className='navbarItem'><p className='navbarLink'>Ягоды сушенные</p></li>
                <li className='navbarItem'><p className='navbarActive navbarLink'>Цукаты</p></li>
                <li className='navbarItem'><p className='navbarLink'>Восточные сладости</p></li>
                <li className='navbarItem'><p className='navbarLink'>Снеки</p></li>
                <li className='navbarItem'><p className='navbarLink'>Семена и бобовые</p></li>
                <li className='navbarItem'><p className='navbarLink'>Бакалея</p></li>
            </ul>
            <div className='cardContainer'>
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
    );
}

export default CatalogCard