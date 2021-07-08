import React, { useRef, useEffect } from "react";
import { ReactComponent as HeroSvg } from "../../svg/AlternateHeroIllustration.svg";
import { gsap } from "gsap";

const HeroIllustration = (props) => {
    const heroRef = useRef(null);

    const illustrationContainerRef = useRef(null);

    // useEffect(() => {
    //     const element = illustrationContainerRef.current;
    //     gsap.fromTo(
    //         element.querySelector("#freepik--Laptop--inject-119"),
    //         {
    //             x: 50,
    //             autoAlpha: 0,
    //             duration: 0.5,
    //             opacity: 0,
    //         },
    //         {
    //             x: 0,
    //             autoAlpha: 1,
    //             duration: 0.5,
    //             opacity: 1,
    //             delay: 1,
    //         }
    //     );
    //     gsap.fromTo(
    //         element.querySelector("#background-screen"),
    //         {
    //             x: 50,
    //             autoAlpha: 0,
    //             duration: 0.5,
    //             opacity: 0,
    //         },
    //         {
    //             x: 0,
    //             autoAlpha: 1,
    //             duration: 0.5,
    //             opacity: 1,
    //             delay: 1.2,
    //         }
    //     );
    //     gsap.fromTo(
    //         element.querySelector("#foreground-screen"),
    //         {
    //             x: 50,
    //             autoAlpha: 0,
    //             duration: 0.5,
    //             opacity: 0,
    //         },
    //         {
    //             x: 0,
    //             autoAlpha: 1,
    //             duration: 0.5,
    //             opacity: 1,
    //             delay: 1.4,
    //         }
    //     );
    //     gsap.to(element.querySelector("#foreground-screen"), {
    //         y: -800,
    //         scrollTrigger: {
    //             scrub: 1,
    //         },
    //     });
    //     gsap.to(element.querySelector("#background-screen"), {
    //         y: -400,
    //         scrollTrigger: {
    //             scrub: 1,
    //         },
    //     });
    //     gsap.to(element.querySelector("#laptop"), {
    //         y: -200,
    //         scrollTrigger: {
    //             scrub: 1,
    //         },
    //     });
    // }, []);

    return (
        <div
            className="justify-center align-middle items-center hidden lg:flex"
            ref={illustrationContainerRef}
            id="illustration"
        >
            <HeroSvg className={props.className} ref={heroRef} />
        </div>
    );
};

export default HeroIllustration;
