import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Context } from '../../index';

import "./CatalogCard.css";
import CardBlock from './CardBlock';

const CatalogCard = observer(() => {
    const { product } = useContext(Context)

    console.log(product)
    return (
        <div className='boxContainer'>
            <div className='boxTitle'>
                <h4 className='cardTitle'>
                    Наш ассортимент
                </h4>
            </div>
            <ul className='navbarList'>
                {product.Views.map(view =>
                    <li key={view.number}
                        className='navbarItem'>
                        <p className='navbarLink'>
                            {view.name}
                        </p>
                    </li>
                )}

            </ul>
            <div className='cardContainer'>
                <CardBlock />
                <CardBlock />
            </div>
        </div>
    );
})

export default CatalogCard