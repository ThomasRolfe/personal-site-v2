import React from "react";
import PublicLayout from "../../layout/PublicLayout";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import Portfolio from "../components/Portfolio";

const Home = (props) => {
    return (
        <PublicLayout>
            <div className="bg-stripe-1 z-5" id="stripeLeft"></div>
            <div className="bg-stripe-2 z-5" id="stripeRight"></div>
            <Hero />
            <Offerings />
            <Portfolio />
            <Features />
            <Contact />
        </PublicLayout>
    );
};

export default Home;
