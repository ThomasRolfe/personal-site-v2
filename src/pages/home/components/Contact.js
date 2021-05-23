import React from "react";
import ContactForm from "../../components/contactForm";

const Contact = (props) => {
    return (
        <>
            <div className="clip-slant-right h-48  bg-white w-full relative z-30"></div>
            <section className="min-h-screen bg-white grid grid-cols-2">
                <div>
                    <h2 className="text-black text-7xl font-extrabold tracking-wide text-center fade-up invisible">
                        Lets work{" "}
                        <span className="text-gradient-primary">together!</span>{" "}
                    </h2>
                    <p>
                        Whether you need a consultant, part time/contract work
                        or simply want to chat, get in touch with me here or via
                        the social links below.
                    </p>
                </div>
                <div></div>
                <ContactForm />
            </section>
        </>
    );
};

export default Contact;
