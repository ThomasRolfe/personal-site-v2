import React, { useRef, useEffect } from "react";
import BrandedLink from "../../../components/buttons/BrandedLink";
import { gsap } from "gsap";
import LogoGroup from "../../components/LogoGroup";
import AboutHeroIllustration from "./AboutHeroIllustration";

const AboutHero = (props) => {
    const ref = useRef(null);
    const illustrationContainerRef = useRef(null);

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
                                About me
                            </h1>
                            <p
                                className="text-gray-400 text-lg mt-12 max-w-3xl invisible"
                                id="subHeading"
                            >
                                Web app and website development, from planning
                                and design to production and deployment.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className=" justify-center align-middle hidden lg:flex items-center"
                    ref={illustrationContainerRef}
                    id="illustration"
                >
                    <AboutHeroIllustration className="w-2/3" />
                </div>
            </section>
            <div className="hidden md:block mb-12 w-3/4 mx-auto lg:mx-0 lg:w-full z-20 relative">
                <LogoGroup />
            </div>
        </>
    );
};

export default AboutHero;
