import React from "react";
import bigLogo from "../../assets/bigLogo.png";
const MainContact = () => {
    return (
        <div className="boxContainer">
            <div className="aboutUsTitleBlock">
                <h4 className="aboutUsTitle">
                    Контакты
                </h4>
            </div>
            <div className="aboutUsContentBlock">
                <p className="aboutUsContent">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    CuLaboriosam illo odit neque pariatur.
                    Cum, quaerat. Nemo, molestias abm, quaerat. Nemo, molestias ab. In, cum eligendi sit reiciendis veritatis beatae

                    CuLaboriosam illo odit neque pariatur.
                    Cum, quaerat. Nemo, molestias abm, quaerat. Nemo, molestias abmo, molestias ab. In, cum eligendi sit reiciendis veritatis beatae
                    voluptatibus officiis eos culpa voluptatem? Laboriosam illo odit neque pariatur.
                    iciendis veritatis beatae
                    voluptatibus officiis eos culpa voluptatem? Laboriosam illo odit neque pariatur.
                </p>
            </div>
            <div className="bigLogoBlock">
                <img className="bigLogoImg" src={bigLogo} />
            </div>
        </div>
    );
}

export default MainContact