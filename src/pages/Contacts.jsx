import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";

const Contacts = ({ openPopup, closePopup }) => {
    return (
        <div className="contacts" id="contacts">
            <div className="container">
                <div className="contacts-wrapper">
                    <div className="contacts-inner">
                        <div className="contacts-title">Давайте создадим что-то вместе</div>
                        <div className="contacts-text">
                            Свяжитесь со мной для обсуждения вашего проекта. Я открыт к сотрудничеству и всегда готов
                            воплотить идеи в жизнь.
                        </div>
                        <div className="contacts-info">
                            <Link to={"tel:+79372531018"} className="contacts-info__phone">
                                <MdOutlinePhoneIphone />
                                <span>8 (937) 253-10-18</span>
                            </Link>
                            <Link to={"mailto:Demjke64@gmail.com"} className="contacts-info__mail">
                                <IoIosMail />
                                <span>Demjke64@gmail.com</span>
                            </Link>
                        </div>
                    </div>
                    <Form openPopup={openPopup} closePopup={closePopup} />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
