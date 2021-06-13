import React from "react";
import PublicLayout from "../../layout/PublicLayout";
import Contact from "../components/Contact";
import AboutHero from "./components/AboutHero";

const About = (props) => {
    return (
        <PublicLayout>
            <div className="bg-stripe-1 z-5" id="stripeLeft"></div>
            <div className="bg-stripe-2 z-5" id="stripeRight"></div>
            <AboutHero />
            <Contact />
        </PublicLayout>
    );
};

export default About;
