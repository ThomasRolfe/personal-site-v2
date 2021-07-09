import React, { useRef, useEffect } from "react";
import BrandedLink from "../../components/buttons/BrandedLink";
import { gsap } from "gsap";
import HeroIllustration from "./HeroIllustration";
import ScrollToRef from "../../components/helpers/ScrollToRef";

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
            <section className="mt-12 md:mt-0 lg:h-screen z-10 relative grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto ">
                <div className="flex flex-col md:justify-center min-h-140 ">
                    <div className="px-4 sm:px-6 lg:px-8 w-full  " ref={ref}>
                        <div>
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
                                Web app and website development, from planning
                                and design to production and deployment.
                            </p>
                            <div className="mt-12 flex flex-wrap sm:block">
                                <BrandedLink
                                    to="#what-do-i-do"
                                    className="button bg-brand text-white invisible hover:text-dark transition w-full sm:w-auto custom-hover:hover"
                                    id="featuresLink"
                                    onClick={() => {
                                        ScrollToRef(props.offeringsRef);
                                    }}
                                >
                                    <span className="text-shadow font-bold text-dark">
                                        What can I do for you?
                                    </span>
                                </BrandedLink>
                                <BrandedLink
                                    to="#"
                                    className="button button-brand-hollow mt-8 sm:mt-0 sm:ml-8 invisible transition w-full sm:w-auto font-bold custom-hover:hover"
                                    id="portfolioLink"
                                    onClick={() => {
                                        ScrollToRef(props.portfolioRef);
                                    }}
                                >
                                    Portfolio
                                </BrandedLink>
                            </div>
                        </div>
                    </div>
                </div>

                <HeroIllustration className="w-10/12 " />
            </section>
        </>
    );
};

export default Hero;
