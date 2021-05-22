import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import BrandedLink from "../../../components/buttons/BrandedLink";

const PortfolioCard = ({ portfolio, tags }) => {
    return (
        <section className="p-24 bg-gradient-dark rounded-xl my-24 portfolioCard invisible">
            <div className="grid grid-cols-2 ">
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-white font-bold text-5xl mb-3">
                            {portfolio.title.rendered}
                        </h3>
                        <a
                            target="_blank"
                            className="text-brand hover:text-brand-light hover:underline text-lg inline-block"
                            href={portfolio.site_link}
                        >
                            {portfolio.site_link}
                        </a>
                        {portfolio.github_link ? (
                            <>
                                <span className="text-white mx-2"> | </span>
                                <a href={portfolio.github_link} target="_blank">
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
                <div className="">
                    <img
                        className="rounded-lg"
                        src={portfolio.jetpack_featured_media_url}
                    ></img>
                </div>
            </div>
        </section>
    );
};

export default PortfolioCard;
