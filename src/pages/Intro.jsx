import { memo } from "react";
import { IoIosMail } from "react-icons/io";
import { MdOutlineArrowOutward, MdOutlinePhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";
import IntroImg from "../assets/images/intro-img.jpg";
import { Form } from "../components/Form";

const Intro = memo(({ openPopup, closePopup }) => {
    return (
        <div className="intro" id="intro">
            <div className="container">
                <div className="intro-wrapper">
                    <div className="intro-info">
                        <div className="intro-info__name">
                            Мое имя
                            <span> Виталий Антипов...</span>
                        </div>
                        <div className="intro-info__profession">Веб-разработчик в России</div>
                        <button
                            type="button"
                            className="intro-info__btn"
                            onClick={() => openPopup(<Form closePopup={closePopup} openPopup={openPopup} />)}
                        >
                            <span>Написать мне</span>
                            <MdOutlineArrowOutward />
                        </button>
                        <div className="intro-info__contacts">
                            <Link to={"tel:+79372531018"} className="intro-info__phone">
                                <MdOutlinePhoneIphone className="icon" />
                                <span>8 (937) 253-10-18</span>
                            </Link>
                            <Link to={"mailto:Demjke64@gmail.com"} className="intro-info__mail">
                                <IoIosMail className="icon" />
                                <span>Demjke64@gmail.com</span>
                            </Link>
                        </div>
                    </div>
                    <div className="intro-img">
                        <img src={IntroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Intro;
