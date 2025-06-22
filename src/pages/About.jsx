import { memo } from "react";
import { FaRegAddressBook } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowOutward, MdOutlinePhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";
import IntroImg from "../assets/images/about-img.jpeg";
import { Form } from "../components/Form";

const About = memo(({ openPopup }) => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-info">
                        <div className="about-info__slogan">Приятно познакомиться!</div>
                        <div className="about-info__title">Добро пожаловать...</div>
                        <div className="about-info__img">
                            <img src={IntroImg} alt="" />
                        </div>
                        <div className="about-info__name">Виталий Антипов</div>
                        <div className="about-info__professional">Веб-разработик в России</div>
                        <button type="button" className="about-info__btn" onClick={() => openPopup(<Form />)}>
                            Написать мне
                            <MdOutlineArrowOutward />
                        </button>
                    </div>
                    <div className="about-contacts">
                        <div className="about-contacts__wrapper">
                            <Link to={"tel:+79372531018"} className="about-contacts__phone">
                                <MdOutlinePhoneIphone className="icon" />
                                <span>8 (937) 253-10-18</span>
                            </Link>
                            <Link to={"mailto:Demjke64@gmail.com"} className="about-contacts__mail">
                                <IoIosMail className="icon" />
                                <span>Demjke64@gmail.com</span>
                            </Link>
                            <div className="about-contacts__age">
                                <FaRegAddressBook className="icon" />
                                <span>30 лет</span>
                            </div>
                            <div className="about-contacts__address">
                                <IoLocationOutline className="icon" />
                                <span>Саратов, Россия</span>
                            </div>
                        </div>
                        <div className="about-contacts__info">
                            <div className="about-contacts__info-item">
                                <div className="about-contacts__info-title">
                                    <div className="about-contacts__info-num">4+</div>
                                    <div className="about-contacts__info-text">
                                        лет <br /> опыта...
                                    </div>
                                </div>
                                <div className="about-contacts__info-desc">
                                    Привет! Меня зовут Виталий Антипов. Я веб -разработчик, и я очень увлечен и посвящен
                                    своей работе.
                                </div>
                            </div>
                            <div className="about-contacts__info-item">
                                <div className="about-contacts__info-title">
                                    <div className="about-contacts__info-num">100+</div>
                                    <div className="about-contacts__info-text">
                                        Выполненных <br /> работ...
                                    </div>
                                </div>
                                <div className="about-contacts__info-desc">
                                    Благодаря 4 с лишним лет опыта в качестве веб-разработчика, я приобрел навыки и
                                    знания, необходимые для того, чтобы сделать ваш проект успешным.
                                </div>
                            </div>
                        </div>
                        <div className="about-contacts__banner">
                            “Создаю быстрые и отзывчивые веб-интерфейсы с фокусом на UX.”
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-experience">
                <div className="container">
                    <div className="about-experience__wrapper">
                        <div className="about-experience__info">
                            <div className="about-experience__subtitle">Опыт</div>
                            <div className="about-experience__title">Мой опыт</div>
                            <div className="about-experience__text">
                                Привет! Я Виталий Антипов — фронтенд-разработчик. Специализируюсь на создании адаптивных
                                и производительных веб-интерфейсов на React. Более 4 лет опыта в разработке, свыше 100
                                успешно выполненных проектов — от лендингов до сложных приложений.
                            </div>
                            <button type="button" className="about-experience__btn" onClick={() => openPopup(<Form />)}>
                                <span> Написать мне</span>
                                <MdOutlineArrowOutward />
                            </button>
                        </div>
                        <div className="about-experience__items">
                            <div className="about-experience__item">
                                <div className="about-experience__item-wrapper">
                                    <div className="about-experience__item-year">-2021 - 2025</div>
                                    <div className="about-experience__item-company">-Пульс-цен</div>
                                </div>
                                <div className="about-experience__item-title">Web-разрабочтик</div>
                            </div>
                            <div className="about-experience__item">
                                <div className="about-experience__item-wrapper">
                                    <div className="about-experience__item-year">-2018 - 2021</div>
                                    <div className="about-experience__item-company">
                                        -ГКУ СО "Управление социальной поддержки населения Балаковского района."
                                    </div>
                                </div>
                                <div className="about-experience__item-title">Системный администратор</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default About;
