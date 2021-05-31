import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BrandedLink from "../../../components/buttons/BrandedLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PortfolioCard = ({ portfolio, tags }) => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".portfolioImageContainer"),
            {
                // y: "350px",
            },
            {
                y: "-150px",
                x: "50px",
                scrollTrigger: {
                    scrub: 2,
                    start: "top middle",
                },
            }
        );
    }, []);

    return (
        <section
            className="p-24 bg-gradient-dark rounded-xl mb-24 portfolioCard invisible overflow-hidden"
            ref={ref}
        >
            <div className="grid grid-cols-2 ">
                <div className="flex flex-col justify-between z-20">
                    <div>
                        <h3 className="text-white font-bold text-5xl mb-3">
                            {portfolio.title.rendered}
                        </h3>
                        <a
                            target="_blank"
                            rel="noopener"
                            className="text-brand hover:text-brand-light hover:underline text-lg inline-block"
                            href={portfolio.site_link}
                        >
                            {portfolio.site_link}
                        </a>
                        {portfolio.github_link ? (
                            <>
                                <span className="text-white mx-2"> | </span>
                                <a
                                    href={portfolio.github_link}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="text-brand hover:text-brand-light hover:underline cursor-pointer"
                                        size="lg"
                                    />
                                </a>
                            </>
                        ) : (
                            ""
                        )}
                        {portfolio.tags ? (
                            <div className="flex gap-2 mt-3">
                                {portfolio.tags.map((tag, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className="inline-block uppercase rounded border border-gray-400 text-gray-400 text-xs py-1 px-2"
                                        >
                                            {tags[tag]}
                                        </span>
                                    );
                                })}
                            </div>
                        ) : (
                            ""
                        )}
                        <p
                            className="text-white mt-12 pr-24"
                            dangerouslySetInnerHTML={{
                                __html: portfolio.excerpt.rendered,
                            }}
                        ></p>
                    </div>
                    <div>
                        <BrandedLink
                            to={`/portfolio/${portfolio.slug}`}
                            className="button button-brand-hollow mt-12 font-bold"
                        >
                            Read more
                        </BrandedLink>
                    </div>
                </div>
                <div className="portfolioContainer">
                    <div className="portfolioImageContainer">
                        <img
                            alt=""
                            className="rounded-lg"
                            src={portfolio.jetpack_featured_media_url}
                        ></img>
                        <img
                            alt=""
                            className="rounded-lg"
                            src={portfolio.jetpack_featured_media_url}
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioCard;
