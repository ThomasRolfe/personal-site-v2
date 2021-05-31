import React from "react";
import ContactForm from "../../components/contactForm";

const Contact = (props) => {
    return (
        <>
            <div className="clip-slant-right h-48  bg-white w-full relative z-30"></div>
            <div className="bg-white flex justify-center flex-col min-h-2-3-screen">
                <section className="grid grid-cols-2 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div>
                        <h2 className="text-black text-6xl font-extrabold tracking-wide fade-up ">
                            Lets work{" "}
                            <span className="text-gradient-primary">
                                together!
                            </span>{" "}
                        </h2>
                        <p className="mt-12 text-xl text-gray-400">
                            Whether you need a consultant, part time/contract
                            work or simply want to chat, get in touch with me
                            here or via the social links below.
                        </p>
                    </div>
                    <div>
                        <div className="w-2/3 mx-auto">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
