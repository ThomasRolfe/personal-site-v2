import React, { useEffect, useRef } from "react";

import {
    faClipboardList,
    faPencilRuler,
    faLaptopCode,
    faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OfferingCard from "./OfferingCard";

const OfferingData = [
    {
        title: "Specification & Ideation",
        copy: [
            `Translate your ideas into achievable technical
            specifications. This process is crucial to
            ensure the right system is built for the right
            business objectives.`,
        ],
        icon: faClipboardList,
    },
    {
        title: "Mockup & Design",
        copy: [
            `Production of website wireframes and mockups.
            This affords quick iteration and feedback on
            design ideas before jumping into code.`,
        ],
        icon: faPencilRuler,
    },
    {
        title: "Programming",
        copy: [
            `Contributing to or creating the codebase for the
            product at hand. Working with a range of
            frameworks and libraries across PHP, JavaScript,
            MySQL, HTML and CSS, and always happy to learn a
            new language.`,
        ],
        icon: faLaptopCode,
    },
    {
        title: "Deployment",
        copy: [
            `Bespoke applications will often need a bespoke
            deployment setup which can be designed based on
            the requirements, project budget and expansion
            potential.`,
        ],
        icon: faCloudUploadAlt,
    },
];

const Offerings = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    const timelineRefs = useRef([]);
    timelineRefs.current = [];

    const addToRefs = (element) => {
        if (element && !timelineRefs.current.includes(element)) {
            timelineRefs.current.push(element);
        }
    };

    useEffect(() => {
        const element = ref.current;
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: element.querySelector("#offeringsContainer"),
                scrub: true,
                start: "top",
                end: "+=3800",
                pin: true,
            },
        });

        timelineRefs.current.forEach((card, index) => {
            if (index > 0) {
                timeline
                    .to(card.querySelector(".offeringCard"), {
                        opacity: 1,
                        autoAlpha: 1,
                        duration: 0.1,
                    })

                    .fromTo(
                        card.querySelector(".offeringIcon"),
                        { opacity: 0, top: 100 },
                        { opacity: 1, autoAlpha: 1, top: 0, duration: 10 }
                    )
                    .fromTo(
                        card.querySelector(".offeringCopy"),
                        {
                            opacity: 0,
                            x: 50,
                        },
                        {
                            x: 0,
                            duration: 10,
                            opacity: 1,
                            autoAlpha: 1,
                        }
                    )
                    .addLabel(`_${index}offeringIn`)
                    .addPause(`_${index}offeringIn+=10`);
            }

            if (index + 1 < timelineRefs.current.length) {
                // This stops the last card from animating away when scrolling down
                timeline
                    .to(card.querySelector(".offeringIcon"), {
                        opacity: 0,
                        autoAlpha: 0,
                        top: 100,
                        duration: 10,
                    })
                    .to(card.querySelector(".offeringCopy"), {
                        opacity: 0,
                        autoAlpha: 0,
                        x: 50,
                        duration: 10,
                    })
                    .to(card.querySelector(".offeringCard"), {
                        opacity: 0,
                        autoAlpha: 0,
                        duration: 0.1,
                    });
            }
        });
        ScrollTrigger.refresh(true);
    }, []);

    ScrollTrigger.refresh();

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".fade-up"),
            {
                opacity: 0,
                y: 70,
            },
            {
                opacity: 1,
                y: 0,
                autoAlpha: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: element.querySelector(".fade-up"),
                    start: "top+=150 bottom",
                },
            }
        );
    }, []);

    return (
        <div ref={ref} className="w-full">
            <div className="clip-slant-right h-48  bg-gray-50 w-full relative z-30"></div>
            <section
                className="h-screen bg-gray-50 z-30 relative pt-4 md:pt-12 overflow-hidden w-full"
                id="offeringsContainer"
                ref={props.offeringsRef}
            >
                <div
                    className="max-w-screen-2xl mx-auto w-full inline-block"
                    id=""
                >
                    <h2
                        className="text-black pt-8 md:pt-0 text-4xl md:text-7xl font-extrabold tracking-wide text-center fade-up invisible absolute w-full"
                        id="what-do-i-do"
                    >
                        Input at{" "}
                        <span className="text-gradient-primary">every</span>{" "}
                        stage
                    </h2>
                    {OfferingData.map((item, index) => {
                        return (
                            <OfferingCard
                                key={index}
                                refFunction={addToRefs}
                                hide={index < 1}
                                {...item}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Offerings;
