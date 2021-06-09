import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faChartArea,
    faProjectDiagram,
    faCreditCard,
    faBug,
    faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import FeatureGrid from "./FeatureGrid";
import FeatureItem from "./FeatureItem";

const featureList = [
    {
        title: "Portfolio Sites",
        description:
            "Build an online presence for your business, hobby, artwork and more. ",
        icon: faEnvelope,
    },
    {
        title: "Reporting Dashboards",
        description:
            "Build an online presence for your business, hobby, artwork and more.",
        icon: faChartArea,
    },
    {
        title: "Business Intelligence",
        description:
            "Build an online presence for your business, hobby, artwork and more.",
        icon: faProjectDiagram,
    },
    {
        title: "Payment Gateways",
        description:
            "Build an online presence for your business, hobby, artwork and more.",
        icon: faCreditCard,
    },
    {
        title: "Bug Fixes",
        description:
            "Build an online presence for your business, hobby, artwork and more.",
        icon: faBug,
    },
    {
        title: "Web Design",
        description:
            "Build an online presence for your business, hobby, artwork and more.",
        icon: faPaintBrush,
    },
];

const Features = (props) => {
    return (
        <section className="min-h-screen">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 md:mt-20 ">
                <h2 className="text-white text-4xl sm:text-7xl font-extrabold tracking-wide text-center py-8 my-24 fade-up">
                    What can I build?
                </h2>
                <FeatureGrid>
                    {featureList.map((item, index) => {
                        return <FeatureItem key={index} {...item} />;
                    })}
                </FeatureGrid>
            </div>
        </section>
    );
};

export default Features;
