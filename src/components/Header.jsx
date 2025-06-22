import { memo, useEffect, useRef, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Form } from "./Form";

const Header = memo(({ openPopup }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = e => {
            if (!wrapperRef.current.contains(e.target)) setOpenMenu(false);
        };

        if (openMenu) document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openMenu]);

    return (
        <div className="header">
            <div className="header-logo" style={{ color: `${openMenu ? "white" : "black"}` }}>
                В А
            </div>
            <div className="header-wrapper" ref={wrapperRef} style={{ left: `${openMenu ? "0px" : "-285px"}` }}>
                <nav className="header-menu">
                    <HashLink smooth to="/#intro" className="header-link">
                        Главная
                    </HashLink>
                    <HashLink smooth to="/#about" className="header-link">
                        Обо мне
                    </HashLink>
                    <HashLink smooth to="/#skills" className="header-link">
                        Технологии
                    </HashLink>
                    <HashLink smooth to="/#works" className="header-link">
                        Работы
                    </HashLink>
                    <HashLink smooth to="/#contacts" className="header-link">
                        Контакты
                    </HashLink>
                </nav>
                <div className="header-socials socials">
                    <Link to={"https://github.com/Demjke"} className="header-social socials-social">
                        <FaGithub className="icon icon_git" />
                    </Link>
                    <Link to={"mailto:Demjke64@gmail.com"} className="header-social socials-social">
                        <IoIosMail className="icon icon_mail" />
                    </Link>
                    <Link to={"https://t.me/Demjke64"} className="header-social socials-social">
                        <FaTelegram className="icon icon_tg" />
                    </Link>
                </div>
                <button type="button" className="header-btn" onClick={() => openPopup(<Form openPopup={openPopup} />)}>
                    Написать мне
                </button>
            </div>
            <div className="header-burger" onClick={() => setOpenMenu(prev => !prev)}>
                {openMenu ? <IoClose className="icon" /> : <CgMenuLeft className="icon" />}
            </div>
        </div>
    );
});

export default Header;
