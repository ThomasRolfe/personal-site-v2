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
            "Build an online presence for your business, hobby, artwork and more.",
        icon: faEnvelope,
    },
    {
        title: "Reporting Dashboards",
        description:
            "Visualise your data in a meaningful & easy to consume way.",
        icon: faChartArea,
    },
    {
        title: "Business Intelligence",
        description:
            "Find information amongst your data & drive business decisions.",
        icon: faProjectDiagram,
    },
    {
        title: "Payment Gateways",
        description:
            "Integrate payment gateways in to your website or shop to make payments a breeze.",
        icon: faCreditCard,
    },
    {
        title: "Bug Fixes",
        description:
            "Squash bugs in old or new projects on a case by case basis.",
        icon: faBug,
    },
    {
        title: "Web Design",
        description:
            "Design of websites, layouts and interfaces to suit your projects needs and style.",
        icon: faPaintBrush,
    },
];

const Features = (props) => {
    return (
        <section className="min-h-screen" ref={props.featuresRef}>
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
