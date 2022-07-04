import React from "react";
import Sidebar from "../../subComponents/sidebar/Sidebar";
import CardBlock from "../cardCatalog/CardBlock";

import "../cardPattern/cardPattern.css"

const CardPattern = () => {

    const desc =
    {
        title: "Абрикос Сушенные",
        content: "Lorem Ipsum - это текст- часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века.",
        price: "322.90 Р",
        img: "data:image/jpeg;base64,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"
    }

    return (
        <div className="">
            <div className="boxTitle">
                <h2 className="cardTitle">
                    {desc.title}
                </h2>
            </div>
            <div className="boxContainer">
                <div className="patternMainBlock">
                    <Sidebar />
                    <div className="patternDescBlock">
                        <div className="patternLeftBlock">
                            <div className="patternImgBlock">
                                <img src={desc.img} alt="img card product" className="patternImg" />
                            </div>
                            <ul className="patternBottomList">
                                <li className="patternBottomItem">100г</li>
                                <li className="patternBottomItem">500г</li>
                                <li className="patternBottomItem">1000г</li>
                            </ul>
                        </div>
                        <div className="patternContentBlock">
                            <div className="patternTitleBlock">
                                <p className="patternTitle">{desc.content}</p>
                            </div>
                            <p className="patternPrice">{desc.price}</p>
                            <a href="/" className="patternContentBtn">В корзину</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxContainer">
                <div className="boxTitle">
                    <h2 className="cardTitle">
                        Сопутствующие товары
                    </h2>
                </div>
                <div className="productBlock">
                    <CardBlock />
                    <CardBlock />
                    <CardBlock />
                    <CardBlock />
                </div>
            </div>
        </div>
    );
}

export default CardPattern;