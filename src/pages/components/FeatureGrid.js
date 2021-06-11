import gsap from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";

const FeatureGrid = (props) => {
    const featureGridRef = useRef(null);

    useEffect(() => {
        const element = featureGridRef.current;
        const items = gsap.utils.toArray(
            element.querySelectorAll(".featureItemCard")
        );

        items.forEach((card) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    autoAlpha: 1,
                    scrollTrigger: {
                        trigger: card,
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
