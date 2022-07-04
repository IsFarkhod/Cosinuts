import React from "react";

import bigLogo from "../../assets/bigLogo.png"

import "../mainStore/mainStore.css"

const MainStore = () => {

    const data = [
        {    
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoxo0KQ1dIgjVQp9oVdfTU0n_6_2HMaXAxw&usqp=CAU",
            content: "Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн."
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DNnD6hxqngBfu3c6QDj22TiFPKmrWkSh8w&usqp=CAU",
            content: "Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн."
        }
    ]

    return (
        <div className="boxContainer">
            <div className="storeTitleBlock">
                <h2 className="storeTitle">
                    Наши магазины
                </h2>
            </div>
            <div className="storeContentBlock">
                <div className="storeContent">
                    {data.map((item) => (
                        <div className="storeDescription">
                            <div className="storeImgBlock">
                                <img src={item.src} className="storeImg"/>
                            </div>
                            <div className="storeInform">
                                <p className="storeSubTitle">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bigLogoBlock">
                <img className="bigLogoImg" src={bigLogo} />
            </div>
        </div>
    );
}

export default MainStore