import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Context } from "../../index";

import "../sidebar/sidebar.css"

const Sidebar = observer(() => {
    const { product } = useContext(Context);
    console.log(product)
    return (

        <div className="sidebarBlock">
            <ul className="sidebarList">
                <li className="sidebarItem">
                    <p className="sidebarTitle">Категория</p>
                </li>
                {product.Views.map(view =>
                    <li
                        key={view.number}
                        className="sidebarItem">
                        <p
                            className="sidebarBtn"
                         
                        >{view.name}</p>
                    </li>
                )}
            </ul>
        </div>
    );
})

export default Sidebar;