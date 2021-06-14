import React from "react";
import PublicLayout from "../../layout/PublicLayout";
import Contact from "../components/Contact";
import AboutHero from "./components/AboutHero";
import Tooling from "./components/Tooling";

const About = (props) => {
    return (
        <PublicLayout>
            <div className="bg-stripe-1 z-5" id="stripeLeft"></div>
            <div className="bg-stripe-2 z-5" id="stripeRight"></div>
            <AboutHero />
            <Tooling />
            <Contact />
        </PublicLayout>
    );
};

export default About;
