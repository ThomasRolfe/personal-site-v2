import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

import {
    faFacebook,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const socialLinks = [
    {
        path: "https://www.facebook.com/TomRolfeWeb/",
        icon: faFacebook,
    },
    {
        path: "https://github.com/ThomasRolfe",
        icon: faGithub,
    },
    {
        path: "https://www.linkedin.com/in/tom-rolfe-web/",
        icon: faLinkedin,
    },
];

const Contact = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    let iconContainer = useRef(null);

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
    }, []);

    return (
        <section className="relative">
            <div className="bg-gray-50 flex justify-center flex-col min-h-2-3-screen">
                <section className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 ">
                    <div className="">
                        <h2 className="text-black text-center lg:text-left text-4xl xs:text-5xl sm:text-6xl font-extrabold tracking-wide fade-up ">
                            Lets work{" "}
                            <span className="text-gradient-primary">
                                together!
                            </span>{" "}
                        </h2>
                        <p className="mt-16 text-md xs:text-lg sm:text-xl text-gray-400 text-center lg:text-left">
                            Whether you need a consultant, part time/contract
                            work or simply want to chat, get in touch with me
                            here or via the social links below.
                        </p>
                        <ul
                            className="flex justify-center my-16"
                            ref={iconContainer}
                        >
                            {socialLinks.map((item, index) => {
                                return (
                                    <li key={index} className="mx-6 invisible">
                                        <Link to={item.path}>
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="svg-hover-gradient-primary hover:scale-110 transform transition text-4xl md:text-5xl"
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <div className="w-full md:w-2/3 mx-auto">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Contact;
