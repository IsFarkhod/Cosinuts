import React from "react";

import "../sidebar/sidebar.css"

const Sidebar = () => {
    return (
       
            <div className="sidebarBlock">
                <ul className="sidebarList">
                    <li className="sidebarItem"><p className="sidebarTitle">Категория</p></li>
                    <li className="sidebarItem"><p className="sidebarBtn">Сухофрукты экзотические</p></li>
                    <li className="sidebarItem"><p className="sidebarBtn">Ягоды сушеные </p></li>
                    <li className="sidebarItem"><p className="sidebarBtn">Цукаты</p></li>
                    <li className="sidebarItem"><p className="sidebarBtn">Восточные сладости</p></li>
                    <li className="sidebarItem"><p className="sidebarBtn">Снеки</p></li>
                    <li className="sidebarItem"><p className="sidebarBtn">Семена и бобовые</p></li>
                    <li className="sidebarItem"><p className="sidebarBtn">Бакалея</p></li>
                    <li className="sidebarItem"><p className="sidebarBtn">Цукаты</p></li>
                </ul>
            </div>
    );
}

export default Sidebar;