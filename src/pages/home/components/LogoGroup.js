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
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
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
                    start: "top center",
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
                    start: "top center+=20",
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
                    start: "top center+=40",
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
                    start: "top center+=60",
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
                    start: "top center+=80",
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
                    start: "top center+=100",
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
                    start: "top center+=120",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div className="absolute bottom-16 mx-auto w-full">
            <div
                className="flex justify-between mx-auto max-w-3xl z-10"
                ref={ref}
            >
                <FontAwesomeIcon
                    icon={faLaravel}
                    className="svg-gradient-primary"
                    size="3x"
                    id="laravelIcon"
                />
                <FontAwesomeIcon
                    icon={faReact}
                    className="svg-gradient-primary"
                    size="3x"
                    id="reactIcon"
                />
                <FontAwesomeIcon
                    icon={faPhp}
                    className="svg-gradient-primary"
                    fill="#000"
                    size="3x"
                    id="phpIcon"
                />
                <FontAwesomeIcon
                    icon={faSass}
                    className="svg-gradient-primary"
                    size="3x"
                    id="sassIcon"
                />
                <FontAwesomeIcon
                    icon={faStripe}
                    className="svg-gradient-primary"
                    size="3x"
                    id="stripeIcon"
                />
                <FontAwesomeIcon
                    icon={faUikit}
                    className="svg-gradient-primary"
                    size="3x"
                    id="uikitIcon"
                />
                <FontAwesomeIcon
                    icon={faGitkraken}
                    className="svg-gradient-primary"
                    size="3x"
                    id="gitkrakenIcon"
                />
            </div>
        </div>
    );
};

export default LogoGroup;
