import React, { useEffect, useRef, useContext } from "react";
import PortfolioCard from "./PortfolioCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DataContext } from "../../../context/DataContext";

const portfolio = {
    title: "Tomrolfe.co.uk",
    path: "https://tomrolfe.co.uk",
    github: "https://github.com",
    categories: ["react", "tailwind", "gsap", "wordpress"],
    shortDescription: `You are here! Every developer needs their own website and so I used this as a testing ground to progress with React in addition to delving into isometric design in Adobe Illustrator.`,
    id: 1,
    image: "https://api.thomasrolfe.co.uk/wp-content/uploads/2020/05/coversmall.jpg",
};

const Portfolio = (props) => {
    const { portfolios, tags } = useContext(DataContext);

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        if (!portfolios) {
            return;
        }
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
                        start: "top bottom",
                        end: "top bottom",
                    },
                }
            );
        });
    }, [portfolios]);

    return (
        <section className="min-h-screen" ref={ref}>
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
                <h2 className="text-white text-7xl font-extrabold tracking-wide text-center mt-36">
                    Portfolio
                </h2>
                {portfolios.map((portfolio, index) => {
                    return (
                        <PortfolioCard
                            key={index}
                            portfolio={portfolio}
                            tags={tags}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
