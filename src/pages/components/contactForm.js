import React, { useState } from "react";
import Axios from "axios";
import querystring from "querystring";
import BrandedButton from "../../components/buttons/BrandedButton";

const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const postContact = (name, email, message) => {
        Axios.post(
            "https://www.api.thomasrolfe.co.uk/wp-json/contact-form-7/v1/contact-forms/62/feedback",
            querystring.stringify({
                "your-name": name,
                "your-email": email,
                "your-message": message,
                "your-subject": "New contact from website",
            })
        )
            .then((response) => {
                // successModal(
                //     "Thankyou for your message. I will respond as soon as possible."
                // );
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((e) => {
                // errorModal(
                //     "Oops, something went wrong. Please check your inputs and try again."
                // );
            });
    };

    const inputClasses = `text-gray-700 appearance-none rounded w-full py-2 px-3 leading-tight focus:bg-white border focus:border-brand border-gray-300 focus:outline-none
    mb-8`;

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                postContact(name, email, message);
            }}
        >
            <label htmlFor="name" className="text-gray-500 text-sm block mb-2">
                Name
            </label>
            <input
                type="text"
                name="name"
                autoComplete="name"
                className={inputClasses}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="email" className="text-gray-500 text-sm block mb-2">
                Email
            </label>
            <input
                type="email"
                name="email"
                autoComplete="email"
                className={inputClasses}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label
                htmlFor="message"
                className="text-gray-500 text-sm block mb-2"
            >
                Message
            </label>
            <textarea
                name="message"
                className={`${inputClasses} resize-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                required
            />
            <div className="text-center ">
                <BrandedButton
                    type="submit"
                    className="button bg-brand text-white hover:text-dark transition"
                    id=""
                >
                    <span className="text-shadow font-bold">Send message</span>
                </BrandedButton>
            </div>
        </form>
    );
};

export default ContactForm;
