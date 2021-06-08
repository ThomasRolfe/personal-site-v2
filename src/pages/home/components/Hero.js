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
        <>
            <section className="min-h-140 mt-12 md:mt-0 lg:h-screen flex flex-col md:justify-center z-10 relative">
                <div
                    className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full "
                    ref={ref}
                >
                    <h1
                        className="text-white mt-16 md:mt-2 text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide invisible"
                        id="mainHeading"
                    >
                        Full Stack <br />
                        Web Development
                    </h1>
                    <p
                        className="text-gray-400 text-lg mt-12 max-w-3xl invisible"
                        id="subHeading"
                    >
                        Web app and website development, from planning and
                        design to production and deployment.
                    </p>
                    <div className="mt-12 flex flex-wrap sm:block">
                        <BrandedLink
                            to="#what-do-i-do"
                            className="button bg-brand text-white invisible hover:text-dark transition w-full sm:w-auto"
                            id="featuresLink"
                        >
                            <span className="text-shadow font-bold">
                                What do I do?
                            </span>
                        </BrandedLink>
                        <BrandedLink
                            to="#"
                            className="font-bold button button-brand-hollow mt-8 sm:mt-0 sm:ml-8 invisible transition w-full sm:w-auto"
                            id="portfolioLink"
                        >
                            Portfolio
                        </BrandedLink>
                    </div>
                </div>
            </section>
            <div className="hidden md:block mb-12 w-3/4 mx-auto lg:mx-0 lg:w-full z-20 relative">
                <LogoGroup />
            </div>
        </>
    );
};

export default Hero;
