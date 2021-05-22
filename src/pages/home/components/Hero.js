import React, { useRef, useEffect } from "react";
import BrandedLink from "../../../components/buttons/BrandedLink";
import { gsap } from "gsap";
import LogoGroup from "./LogoGroup";

const Hero = (props) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.from(element.querySelector("#mainHeading"), {
            autoAlpha: 0,
            x: 50,
            duration: 0.5,
            opacity: 0,
        });
        gsap.from(element.querySelector("#subHeading"), {
            autoAlpha: 0,
            x: 50,
            duration: 0.5,
            opacity: 0,
            delay: 0.5,
        });
        gsap.from(element.querySelector("#featuresLink"), {
            autoAlpha: 0,
            opacity: 0,
            y: 10,
            duration: 0.3,
            delay: 0.8,
            // ease: "Power2",
        });
        gsap.from(element.querySelector("#portfolioLink"), {
            autoAlpha: 0,
            opacity: 0,
            y: 10,
            duration: 0.3,
            delay: 0.9,
            // ease: "Power2",
        });
    }, []);

    return (
        <section className="h-screen flex flex-col justify-center z-10 relative">
            <div
                className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full "
                ref={ref}
            >
                <h1
                    className="text-white text-7xl font-extrabold tracking-wide invisible"
                    id="mainHeading"
                >
                    Full Stack <br />
                    Web Development
                </h1>
                <p
                    className="text-gray-400 text-xl mt-12 max-w-3xl invisible"
                    id="subHeading"
                >
                    Web app and website development, from planning and design to
                    production and deployment.
                </p>
                <div className="mt-12 ">
                    <BrandedLink
                        to="#what-do-i-do"
                        className="button bg-gradient-primary text-white invisible"
                        id="featuresLink"
                    >
                        <span className="text-shadow font-bold">
                            What do I do?
                        </span>
                    </BrandedLink>
                    <BrandedLink
                        to="#"
                        className="button button-brand-hollow ml-8 font-bold invisible"
                        id="portfolioLink"
                    >
                        Portfolio
                    </BrandedLink>
                </div>
            </div>
            <LogoGroup />
        </section>
    );
};

export default Hero;
