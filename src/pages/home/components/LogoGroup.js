import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaravel,
    faReact,
    faPhp,
    faSass,
    faStripe,
    faUikit,
    faGitkraken,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LogoGroup = (props) => {
    // Animate on large screens only
    const min768 = window.matchMedia("screen and (min-width: 768px)");
    const min1024 = window.matchMedia("screen and (min-width: 1024px)");
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (min768.matches) {
            gsap.fromTo(
                element.querySelector("#logoContainer"),
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.5,
                    delay: 1.5,
                }
            );

            gsap.fromTo(
                element.querySelector("#laravelIcon"),
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    opacity: 0,
                    y: 280,
                    scrollTrigger: {
                        trigger: element.querySelector("#laravelIcon"),
                        start: `${
                            min1024.matches ? "top center" : "top center-=20"
                        }`,
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
            gsap.fromTo(
                element.querySelector("#reactIcon"),
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    opacity: 0,
                    y: 300,
                    scrollTrigger: {
                        trigger: element.querySelector("#reactIcon"),
                        start: `${
                            min1024.matches
                                ? "top center+=20"
                                : "top center-=20"
                        }`,
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
            gsap.fromTo(
                element.querySelector("#phpIcon"),
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    opacity: 0,
                    y: 320,
                    scrollTrigger: {
                        trigger: element.querySelector("#phpIcon"),
                        start: `${
                            min1024.matches
                                ? "top center+=40"
                                : "top center-=20"
                        }`,
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
            gsap.fromTo(
                element.querySelector("#sassIcon"),
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    opacity: 0,
                    y: 340,
                    scrollTrigger: {
                        trigger: element.querySelector("#sassIcon"),
                        start: `${
                            min1024.matches
                                ? "top center+=60"
                                : "top center-=20"
                        }`,
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
            gsap.fromTo(
                element.querySelector("#stripeIcon"),
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    opacity: 0,
                    y: 360,
                    scrollTrigger: {
                        trigger: element.querySelector("#stripeIcon"),
                        start: `${
                            min1024.matches
                                ? "top center+=80"
                                : "top center-=20"
                        }`,
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
            gsap.fromTo(
                element.querySelector("#uikitIcon"),
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    opacity: 0,
                    y: 380,
                    scrollTrigger: {
                        trigger: element.querySelector("#uikitIcon"),
                        start: `${
                            min1024.matches
                                ? "top center+=100"
                                : "top center-=20"
                        }`,
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
            gsap.fromTo(
                element.querySelector("#gitkrakenIcon"),
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    opacity: 0,
                    y: 400,
                    scrollTrigger: {
                        trigger: element.querySelector("#gitkrakenIcon"),
                        start: `${
                            min1024.matches
                                ? "top center+=120"
                                : "top center-=20"
                        }`,
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        }
    }, []);

    return (
        <div className="lg:absolute lg:bottom-16 mx-auto w-full" ref={ref}>
            <div
                className="flex justify-between mx-auto max-w-3xl z-10  md:invisible"
                id="logoContainer"
            >
                <FontAwesomeIcon
                    icon={faLaravel}
                    className="svg-hover-gradient-primary"
                    size="3x"
                    id="laravelIcon"
                />
                <FontAwesomeIcon
                    icon={faReact}
                    className="svg-hover-gradient-primary"
                    size="3x"
                    id="reactIcon"
                />
                <FontAwesomeIcon
                    icon={faPhp}
                    className="svg-hover-gradient-primary"
                    fill="#000"
                    size="3x"
                    id="phpIcon"
                />
                <FontAwesomeIcon
                    icon={faSass}
                    className="svg-hover-gradient-primary"
                    size="3x"
                    id="sassIcon"
                />
                <FontAwesomeIcon
                    icon={faStripe}
                    className="svg-hover-gradient-primary"
                    size="3x"
                    id="stripeIcon"
                />
                <FontAwesomeIcon
                    icon={faUikit}
                    className="svg-hover-gradient-primary"
                    size="3x"
                    id="uikitIcon"
                />
                <FontAwesomeIcon
                    icon={faGitkraken}
                    className="svg-hover-gradient-primary"
                    size="3x"
                    id="gitkrakenIcon"
                />
            </div>
        </div>
    );
};

export default LogoGroup;
