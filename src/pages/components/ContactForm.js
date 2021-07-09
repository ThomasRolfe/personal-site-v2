import React, { useState, useEffect } from "react";
import BrandedButton from "../../components/buttons/BrandedButton";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [state, handleSubmit] = useForm("xdoydqyo");

    useEffect(() => {
        if (state.succeeded) {
            setName("");
            setEmail("");
            setMessage("");
        }
    }, [state]);

    const inputClasses = `text-gray-700 appearance-none rounded w-full py-2 px-3 leading-tight focus:bg-white border focus:border-brand border-gray-300 focus:outline-none
    mb-8`;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-gray-500 text-sm block mb-2">
                Name
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className={inputClasses}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="email" className="text-gray-500 text-sm block mb-2">
                Email
            </label>
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <input
                type="email"
                name="email"
                id="email"
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
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <textarea
                name="message"
                id="message"
                className={`${inputClasses} resize-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                required
            />
            <div className="text-center ">
                {state.succeeded && (
                    <p>
                        Thank you for your message! I will try to reply as soon
                        as possible.
                    </p>
                )}
                {state.submitting && (
                    <FontAwesomeIcon
                        icon={faCircleNotch}
                        className="text-brand hover:text-brand-light hover:underline cursor-pointer text-md ml-3"
                        size="2x"
                        spin
                    />
                )}
                {!state.submitting && !state.succeeded && (
                    <BrandedButton
                        type="submit"
                        className="button bg-brand hover:text-dark transition custom-hover"
                    >
                        <span className="text-shadow font-bold text-dark">
                            Send message
                        </span>
                    </BrandedButton>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
