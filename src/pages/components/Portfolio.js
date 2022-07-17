import React, { useEffect, useRef } from "react";
import PortfolioCard from "./PortfolioCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personalSite from "../../portfolioEntries/tomrolfe-co-uk/portfolioData.json";
import interestCalculator from "../../portfolioEntries/interestcalculator-co-uk/portfolioData.json";
import blackHole from "../../portfolioEntries/canvas-black-hole/portfolioData.json";
import a1Guitar from "../../portfolioEntries/a1guitar-co-uk/portfolioData.json";
import qchart from "../../portfolioEntries/qchart/portfolioData.json";

const Portfolio = (props) => {
    const portfolios = [
        blackHole,
        interestCalculator,
        a1Guitar,
        personalSite,
        qchart,
    ];

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const cards = gsap.utils.toArray(
            element.querySelectorAll(".portfolioCard")
        );
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    x: 100,
                },
                {
                    opacity: 1,
                    x: 0,
                    autoAlpha: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=200",
                        end: "top bottom",
                    },
                }
            );
        });

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
                duration: 1,
                scrollTrigger: {
                    trigger: element.querySelector(".fade-up"),
                    start: "top+=150 bottom",
                },
            }
        );
        ScrollTrigger.refresh(true);
    }, []);

    return (
        <section className="min-h-2-screen " ref={props.portfolioRef}>
            <div
                className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full "
                ref={ref}
            >
                <h2 className="text-white text-4xl sm:text-7xl font-extrabold tracking-wide text-center py-8 md:my-12 fade-up">
                    Portfolio
                </h2>
                {portfolios
                    .filter((item, index) => {
                        return index < 5;
                    })
                    .map((portfolio, index) => {
                        return (
                            <PortfolioCard key={index} portfolio={portfolio} />
                        );
                    })}
            </div>
        </section>
    );
};

export default Portfolio;
