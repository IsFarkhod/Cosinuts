import React from "react";

import "../footer/footer.css"

const Footer = () => {
    return (
        <div className="boxContainer">
            <div className="footerBlock">
                <ul className="footerList d-none">
                    <li className="footerItem"><h3 className="footerTitle">Раздел 1</h3></li>
                    <li className="footerItem"><a href="/" className="footerLink">Сухофрукты</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Орехи</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Ягоды сушенные</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Цукаты</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Экзотические сухофрукты</a></li>
                </ul>
                <ul className="footerList d-none">
                    <li className="footerItem"><h3 className="footerTitle">Раздел 2</h3></li>
                    <li className="footerItem"><a href="/" className="footerLink">Восточные сладости</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Семена и бобовые</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Снеки</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Бакалея</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Специи</a></li>
                </ul>
                <ul className="footerList d-none">
                    <li className="footerItem"><h3 className="footerTitle">Раздел 1</h3></li>
                    <li className="footerItem"><a href="/" className="footerLink">Сухофрукты</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Орехи</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Ягоды сушенные</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Цукаты</a></li>
                    <li className="footerItem"><a href="/" className="footerLink">Экзотические сухофрукты</a></li>
                </ul>
                <ul className="footerList">
                <li className="footerItem"><h3 className="footerTitle">Контакты</h3></li>
                    <li className="footerItem"><p className="footerLink fw-bold">8 993 313 31 33</p></li>
                    <li className="footerItem"><p className="footerLink fw-bold">8 993 313 31 33</p></li>
                    <li className="footerItem"><p className="footerLink fw-bold">Sychofrycti@Gmail.com</p></li>
                    <li className="footerItem"><p className="footerLink fw-bold">Г. Москва улица кубано
                        набережная 56 литер 2</p></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer