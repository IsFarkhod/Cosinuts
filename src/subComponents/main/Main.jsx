import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "../main/Main.css";
import mainImg1 from "../../assets/Main_Images/mainImg1.png";
import mainImg2 from "../../assets/Main_Images/mainImg2.png";
import mainImg3 from "../../assets/Main_Images/mainImg3.jpg";

const Main = () => {
    return (
        <div className='boxContainer'>
            <div className='container'>
                <div className='contentBlock'>
                    <h1 className='mainTitle'><span className='excerptTitle_1'>Dri</span><span className='excerptTitle_2'>ed</span> Fruits</h1>
                    <p className='subTitle'>
                        Lorem ipsum dolor, sit amet elit. Id eum corrupti, consectetur adipisicing voluptatibus repudiandae corporis ipsa.
                    </p>
                    <div className='searchBlock'>
                        <input className='searchInput' placeholder='Кешью Австралийский' />
                        <button type='submit' className='searchBtn'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className='imgBlock'>
                    <img src={mainImg3} className='imgBackground' />
                    <img src={mainImg2} className='imgLeft' />
                    <img src={mainImg1} className='imgRight' />
                </div>
            </div>
        </div>
    );
}

export default Main