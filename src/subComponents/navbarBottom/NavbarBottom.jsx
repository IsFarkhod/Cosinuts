import React from "react";

import "../navbarBottom/navbarBottom.css"

const NavbarBottom = () => {
    return (
        <div className="boxContainer">
            <div className="bottomBlock">
                <ul className="bottomList">
                    <li className="bottomItem"><a href="/" className="bottomLink">Главная</a></li>
                    <li className="bottomItem"><a href="/" className="bottomLink">Каталог</a></li>
                    <li className="bottomItem"><a href="/" className="bottomLink">О нас</a></li>
                    <li className="bottomItem"><a href="/" className="bottomLink">О доставке</a></li>
                    <li className="bottomItem"><a href="/" className="bottomLink">Наша упаковка</a></li>
                    <li className="bottomItem"><a href="/" className="bottomLink">Магазины</a></li>
                    <li className="bottomItem"><a href="/" className="bottomLink">Контакты</a></li>
                </ul>
                <ul className="bottomShoppingCart">
                    <li className="bottomShoppingCartItem">
                        <a href="/" className="bottomFavoritesLink">Избранное</a>
                    </li>
                    <li className="bottomShoppingCartItem">
                        <a href="/" className="bottomShoppingCartBtn">Корзина</a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default NavbarBottom