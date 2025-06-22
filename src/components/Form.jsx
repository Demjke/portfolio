import emailjs from "@emailjs/browser";
import { useCallback, useState } from "react";
import { SendForm } from "./SendForm";

export const Form = ({ openPopup, closePopup }) => {
    const [formData, setFormData] = useState({
        message: "",
        mail: "",
    });

    const changeForm = useCallback(e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const sendForm = e => {
        e.preventDefault();

        const serviceID = "service_b7ytemu";
        const templateID = "template_dlx5rrw";
        const userID = "RoyfR0VLIcffYaB-H";

        emailjs
            .send(serviceID, templateID, formData, userID)
            .then(() => {
                setFormData({ message: "", mail: "" });
                openPopup(<SendForm />);
                setTimeout(() => {
                    closePopup();
                }, 3000);
            })
            .catch(err => {
                console.error("Ошибка отправки", err);
                alert("Ошибка отправки письма");
            });
    };

    return (
        <form action="/" className="form" onSubmit={sendForm}>
            <textarea
                name="message"
                className="form-message"
                placeholder="Введите ваше сообщение"
                value={formData.message}
                onChange={changeForm}
            ></textarea>
            <div className="form-wrapper">
                <input
                    type="email"
                    name="mail"
                    className="form-input"
                    placeholder="Введите Email"
                    value={formData.mail}
                    onChange={changeForm}
                />
                <button className="form-btn" type="submit">
                    Отправить
                </button>
            </div>
        </form>
    );
};
