import React, { useRef } from "react";
import { ReactComponent as HeroSvg } from "../../../svg/AboutHeroIllustration.svg";

const AboutHeroIllustration = (props) => {
    const heroRef = useRef(null);

    return <HeroSvg className={props.className} ref={heroRef} />;
};

export default AboutHeroIllustration;
