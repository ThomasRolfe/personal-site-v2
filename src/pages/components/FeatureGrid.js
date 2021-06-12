import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect } from "react";

const FeatureGrid = (props) => {
    const featureGridRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = featureGridRef.current;
        const items = gsap.utils.toArray(
            element.querySelectorAll(".featureItemCard")
        );

        items.forEach((item) => {
            gsap.fromTo(
                item,
                {
                    opacity: 0,
                    x: 100,
                },
                {
                    opacity: 1,
                    x: 0,
                    autoAlpha: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=200",
                        end: "top bottom",
                    },
                }
            );
        });
    }, []);

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
            ref={featureGridRef}
        >
            {props.children}
        </div>
    );
};

export default FeatureGrid;
