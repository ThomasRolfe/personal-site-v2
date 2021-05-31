import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contactForm";
import {
    faFacebook,
    faGit,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    let iconContainer = useRef(null);
    let contactFormRef = useRef(null);

    // useEffect(() => {
    //     ScrollTrigger.refresh();
    // }, []);

    useEffect(() => {
        gsap.fromTo(
            iconContainer.current.querySelectorAll("li"),
            {
                y: "50px",
                opacity: "0",
                autoAlpha: 0,
            },
            {
                y: "0px",
                opacity: "1",
                autoAlpha: 1,
                stagger: 0.1,
                ease: "back",
                scrollTrigger: {
                    trigger: iconContainer.current.querySelector("li"),
                    start: "bottom+=100px bottom",
                },
            }
        );

        // gsap.fromTo(
        //     contactFormRef.current.querySelector("form"),
        //     {
        //         x: "50px",
        //         opacity: "0",
        //         autoAlpha: 0,
        //     },
        //     {
        //         x: "0px",
        //         opacity: "1",
        //         autoAlpha: 1,
        //         scrollTrigger: {
        //             trigger: contactFormRef.current.querySelector("form"),
        //             start: "bottom+=100px bottom",
        //             markers: true,
        //         },
        //     }
        // );
    }, []);

    return (
        <>
            <div className="clip-slant-right h-48  bg-white w-full relative z-30"></div>
            <div className="bg-white flex justify-center flex-col min-h-2-3-screen">
                <section className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-24 lg:pb-0">
                    <div className="">
                        <h2 className="text-black text-center lg:text-left text-6xl font-extrabold tracking-wide fade-up ">
                            Lets work{" "}
                            <span className="text-gradient-primary">
                                together!
                            </span>{" "}
                        </h2>
                        <p className="mt-16 text-xl text-gray-400 text-center lg:text-left">
                            Whether you need a consultant, part time/contract
                            work or simply want to chat, get in touch with me
                            here or via the social links below.
                        </p>
                        <ul
                            className="flex justify-center my-16"
                            ref={iconContainer}
                        >
                            <li className="mx-6 invisible">
                                <Link to="/">
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className="svg-hover-gradient-primary hover:scale-110 transform transition"
                                        size="3x"
                                        id="reactIcon"
                                    />
                                </Link>
                            </li>
                            <li className="mx-6 invisible">
                                <Link to="/">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="svg-hover-gradient-primary hover:scale-110 transform transition"
                                        size="3x"
                                        id="reactIcon"
                                    />
                                </Link>
                            </li>
                            <li className="mx-6 invisible">
                                <Link to="/">
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="svg-hover-gradient-primary hover:scale-110 transform transition"
                                        size="3x"
                                        id="reactIcon"
                                    />
                                </Link>
                            </li>
                            <li className="mx-6 invisible">
                                <Link to="/">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="svg-hover-gradient-primary hover:scale-110 transform transition"
                                        size="3x"
                                        id="reactIcon"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="w-full md:w-2/3 mx-auto">
                            <ContactForm ref={contactFormRef} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
