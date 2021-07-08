import React, { useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { DataContext } from "../../context/DataContext";
import PublicLayout from "../../layout/PublicLayout";
import Contact from "../components/Contact";
import ClipSlant from "../components/ClipSlant";

const PortfolioPost = (props) => {
    const { portfolios, tags } = useContext(DataContext);
    const slug = props.match.params.slug;
    const portfolio = portfolios.find((item) => item.slug === slug);

    const ref = useRef(null);

    return (
        <PublicLayout>
            <div className="bg-stripe-1 z-5" id="stripeLeft"></div>
            <div className="bg-stripe-2 z-5" id="stripeRight"></div>
            <section className=" mt-12 md:mt-24" ref={props.portfolioRef}>
                <div
                    className=" mx-auto px-4 sm:px-6 lg:px-8 w-full lg:container "
                    ref={ref}
                >
                    {portfolio && (
                        <>
                            <h2 className="text-white text-4xl lg:text-7xl font-extrabold tracking-wide text-center py-8 md:my-12 fade-up">
                                {portfolio.title}
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 pb-12">
                                <div>
                                    <h2 className="text-white text-2xl font-extrabold tracking-wide fade-up">
                                        {portfolio.title}
                                    </h2>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-brand hover:text-brand-light hover:underline text-sm sm:text-lg inline-block mb-5"
                                        href={portfolio.path}
                                    >
                                        {portfolio.path}
                                    </a>
                                    {portfolio.github && (
                                        <a
                                            href={portfolio.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                className="text-brand hover:text-brand-light hover:underline cursor-pointer text-md ml-3"
                                            />
                                        </a>
                                    )}
                                    {portfolio.tags && (
                                        <div className="flex gap-2 mb-3 flex-wrap">
                                            {portfolio.tags.map(
                                                (tag, index) => {
                                                    return (
                                                        <span
                                                            key={index}
                                                            className="inline-block uppercase rounded border border-gray-400 text-gray-400 text-xs py-1 px-2"
                                                        >
                                                            {tag.label}
                                                        </span>
                                                    );
                                                }
                                            )}
                                        </div>
                                    )}
                                    <img
                                        alt=""
                                        className="rounded-md mt-8"
                                        src={`${process.env.REACT_APP_API_URL}${portfolio.featured_images[0].url}`}
                                    ></img>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div
                                        className="text-white pt-8 sm:pt-12 lg:pt-0 lg:px-12 pr-0 portfolio-text"
                                        dangerouslySetInnerHTML={{
                                            __html: portfolio.description,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>
            <ClipSlant />
            <Contact />
        </PublicLayout>
    );
};

export default PortfolioPost;
