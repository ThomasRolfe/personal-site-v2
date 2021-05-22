import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClipboardList,
    faPencilRuler,
    faLaptopCode,
    faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Offerings = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".fade-up"),
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                autoAlpha: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: element.querySelector(".fade-up"),
                    start: "top+=150 bottom",
                },
            }
        );

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: element.querySelector("#offeringsContainer"),
                scrub: true,
                start: "top",
                end: "bottom -150%",
                pin: true,
            },
        });

        //Spec
        tl.to(element.querySelector("#specification"), {
            opacity: 1,
            autoAlpha: 1,
            duration: 0.1,
        })

            .fromTo(
                element.querySelector("#specificationIcon"),
                { opacity: 0, bottom: 50 },
                { opacity: 1, autoAlpha: 1, bottom: 0, duration: 1.5 }
            )
            .fromTo(
                element.querySelector("#specificationCopy"),
                {
                    opacity: 0,
                    x: 50,
                },
                {
                    x: 0,
                    duration: 2.5,
                    opacity: 1,
                    autoAlpha: 1,
                }
            )
            .addLabel("specificationIn")
            .addPause("specificationIn+=10")
            .to(element.querySelector("#specificationIcon"), {
                opacity: 0,
                autoAlpha: 0,
                bottom: 50,
                duration: 1,
            })
            .to(element.querySelector("#specificationCopy"), {
                opacity: 0,
                autoAlpha: 0,
                x: 50,
                duration: 1.5,
            })
            .to(element.querySelector("#specification"), {
                opacity: 0,
                autoAlpha: 0,
                duration: 0.1,
            })
            // Mockup
            .to(element.querySelector("#mockup"), {
                opacity: 1,
                autoAlpha: 1,
                duration: 0.2,
            })
            .fromTo(
                element.querySelector("#mockupIcon"),
                { opacity: 0, bottom: 50 },
                { opacity: 1, autoAlpha: 1, bottom: 0, duration: 0.5 }
            )
            .fromTo(
                element.querySelector("#mockupCopy"),
                {
                    opacity: 0,
                    x: 50,
                },
                {
                    x: 0,
                    duration: 2,
                    opacity: 1,
                    autoAlpha: 1,
                }
            )
            .addLabel("mockupIn")
            .addPause("mockupIn+=10")
            .to(element.querySelector("#mockupIcon"), {
                opacity: 0,
                autoAlpha: 0,
                bottom: 50,
                duration: 0.5,
            })
            .to(element.querySelector("#mockupCopy"), {
                opacity: 0,
                autoAlpha: 0,
                x: 50,
                duration: 0.5,
            })
            .to(element.querySelector("#mockup"), {
                opacity: 0,
                autoAlpha: 0,
                duration: 0.1,
            })
            // Programming
            .to(element.querySelector("#programming"), {
                opacity: 1,
                autoAlpha: 1,
                duration: 0.2,
            })
            .fromTo(
                element.querySelector("#programmingIcon"),
                { opacity: 0, bottom: 50 },
                { opacity: 1, autoAlpha: 1, bottom: 0, duration: 0.5 }
            )
            .fromTo(
                element.querySelector("#programmingCopy"),
                {
                    opacity: 0,
                    x: 50,
                },
                {
                    x: 0,
                    duration: 2,
                    opacity: 1,
                    autoAlpha: 1,
                }
            )
            .addLabel("programmingIn")
            .addPause("programmingIn+=10")
            .to(element.querySelector("#programmingIcon"), {
                opacity: 0,
                autoAlpha: 0,
                bottom: 50,
                duration: 0.5,
                delay: 10,
            })
            .to(element.querySelector("#programmingCopy"), {
                opacity: 0,
                autoAlpha: 0,
                x: 50,
                duration: 0.5,
            })
            .to(element.querySelector("#programming"), {
                opacity: 0,
                autoAlpha: 0,
                duration: 0.1,
            })
            //Deployment
            .to(element.querySelector("#deployment"), {
                opacity: 1,
                autoAlpha: 1,
                duration: 0.2,
            })
            .fromTo(
                element.querySelector("#deploymentIcon"),
                { opacity: 0, bottom: 50 },
                { opacity: 1, autoAlpha: 1, bottom: 0, duration: 0.5 }
            )
            .fromTo(
                element.querySelector("#deploymentCopy"),
                {
                    opacity: 0,
                    x: 50,
                },
                {
                    x: 0,
                    duration: 2,
                    opacity: 1,
                    autoAlpha: 1,
                }
            )
            .addLabel("deploymentIn")
            .addPause("deploymentIn+=10");
    }, []);

    return (
        <div ref={ref}>
            <div className="clip-slant-right h-48  bg-white w-full relative z-30"></div>
            <section
                className="h-screen bg-white z-30 relative pt-12 overflow-hidden"
                id="offeringsContainer"
            >
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h2
                        className="text-black text-7xl font-extrabold tracking-wide text-center fade-up invisible"
                        id="what-do-i-do"
                    >
                        Input at{" "}
                        <span className="text-gradient-primary">every</span>{" "}
                        stage
                    </h2>
                    <div
                        className="grid grid-cols-5 py-52 px-20 invisible absolute"
                        id="specification"
                    >
                        <div
                            className="col-span-2 invisible"
                            id="specificationIcon"
                        >
                            <FontAwesomeIcon
                                icon={faClipboardList}
                                className="huge-icon"
                            />
                        </div>
                        <div
                            className="col-span-3 z-20 invisible"
                            id="specificationCopy"
                        >
                            <h3 className="prepend-primary text-black text-5xl font-bold">
                                Specification & Ideation
                            </h3>
                            <p className="mt-16 leading-relaxed font-light text-gray-500 text-2xl">
                                Translate your ideas into achievable technical
                                specifications. This process is crucial to
                                ensure the right system is built for the right
                                business objectives.
                            </p>
                            <p className="mt-8 leading-relaxed font-light text-gray-500 text-2xl">
                                The more detailed and thorough the
                                specification, the easier the project will be to
                                produce and manage, particularly with multiple
                                people working on the same project.
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div
                        className="grid grid-cols-5 py-52 px-20 absolute invisible"
                        id="mockup"
                    >
                        <div className="col-span-2 invisible" id="mockupIcon">
                            <FontAwesomeIcon
                                icon={faPencilRuler}
                                className="huge-icon"
                            />
                        </div>
                        <div
                            className="col-span-3 z-20 invisible"
                            id="mockupCopy"
                        >
                            <h3 className="prepend-primary text-black text-5xl font-bold">
                                Mockup & Design
                            </h3>
                            <p className="mt-16 leading-relaxed font-light text-gray-500 text-2xl">
                                Production of website wireframes and mockups.
                                This affords quick iteration and feedback on
                                design ideas before jumping into code.
                            </p>
                        </div>
                        <div></div>
                    </div>

                    <div
                        className="grid grid-cols-5 py-52 px-20 absolute invisible"
                        id="programming"
                    >
                        <div
                            className="col-span-2 invisible"
                            id="programmingIcon"
                        >
                            <FontAwesomeIcon
                                icon={faLaptopCode}
                                className="huge-icon"
                            />
                        </div>
                        <div
                            className="col-span-3 z-20 invisible"
                            id="programmingCopy"
                        >
                            <h3 className="prepend-primary text-black text-5xl font-bold">
                                Programming
                            </h3>
                            <p className="mt-16 leading-relaxed font-light text-gray-500 text-2xl">
                                Contributing to or creating the codebase for the
                                product at hand. Working with a range of
                                frameworks and libraries across PHP, JavaScript,
                                MySQL, HTML and CSS, and always happy to learn a
                                new language.
                            </p>
                        </div>
                        <div></div>
                    </div>

                    <div
                        className="grid grid-cols-5 py-52 px-20 absolute invisible"
                        id="deployment"
                    >
                        <div
                            className="col-span-2 invisible"
                            id="deploymentIcon"
                        >
                            <FontAwesomeIcon
                                icon={faCloudUploadAlt}
                                className="huge-icon"
                            />
                        </div>
                        <div
                            className="col-span-3 z-20 invisible"
                            id="deploymentCopy"
                        >
                            <h3 className="prepend-primary text-black text-5xl font-bold">
                                Deployment
                            </h3>
                            <p className="mt-16 leading-relaxed font-light text-gray-500 text-2xl">
                                Bespoke applications will often need a bespoke
                                deployment setup which can be designed based on
                                the requirements, project budget and expansion
                                potential.
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Offerings;
