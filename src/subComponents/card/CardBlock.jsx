import React from 'react';

import "../card/CatalogCard.css";

import imgCard from "../../assets/imgcard.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faRightLeft } from '@fortawesome/free-solid-svg-icons';

const menu = [
    {
        id: 1,
        price: "От 322.00 Р",
        nonprice: "От 455.00 Р",
        title: "Абрикосы сушенные",
        description: "Свежие cушенные абрикосы в герметичной упаковке от фирмы",
    }
];

const CardBlock = () => {
    return (
        <div className='cardBlock'>
            <div className='card'>
                <div className='cardImgBlock'>
                    <img className='cardImg' src={imgCard} alt="card images" />
                </div>
                <div className='cardContent'>
                    {menu.map((item) => (
                        <>
                            <h3 className='cardSubTitle'>{item.title}</h3>
                            <p className='cardDescription'>{item.description}</p>
                            <span className='cardPrice'>{item.price}</span>
                            <s className='cardNonprice'>{item.nonprice}</s>
                        </>
                    ))}
                </div>
                <div className='cardFooter'>
                    <ul className='cardList'>
                        <li className='cardItem'>
                            <p className='cardLink'>
                                <FontAwesomeIcon icon={faRightLeft} />
                            </p>
                        </li>
                        <li className='cardItem'>
                            <p className='cardLink'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </p>
                        </li>
                        <li className='cardItem'>
                            <p className='cardLink activeLink'>
                                <FontAwesomeIcon icon={faHeart} />
                            </p>
                        </li>
                        <li className='cardItem'>
                            <p className='cardBox'>
                                В корзину
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardBlock