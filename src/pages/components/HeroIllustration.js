import React, { useRef } from "react";
import { ReactComponent as HeroSvg } from "../../svg/HeroIllustration.svg";

const HeroIllustration = (props) => {
    const heroRef = useRef(null);

    return <HeroSvg className={props.className} ref={heroRef} />;
};

export default HeroIllustration;
