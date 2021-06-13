import React, { useRef, useEffect } from "react";
import BrandedLink from "../../../components/buttons/BrandedLink";
import { gsap } from "gsap";

const AboutHero = (props) => {
    return (
        <section
            className="min-h-2-screen mt-36 z-10  relative "
            ref={props.portfolioRef}
        >
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
                <h1 className="text-white text-4xl sm:text-7xl font-extrabold tracking-wide text-center py-8 md:my-12 fade-up">
                    About me
                </h1>
            </div>
        </section>
    );
};

export default AboutHero;
