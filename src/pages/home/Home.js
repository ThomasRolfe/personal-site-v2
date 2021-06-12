import React, { useRef } from "react";
import PublicLayout from "../../layout/PublicLayout";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import Portfolio from "../components/Portfolio";

const Home = (props) => {
    const featuresRef = useRef(null);
    const offeringsRef = useRef(null);
    const portfolioRef = useRef(null);

    return (
        <PublicLayout>
            <div className="bg-stripe-1 z-5" id="stripeLeft"></div>
            <div className="bg-stripe-2 z-5" id="stripeRight"></div>
            <Hero
                portfolioRef={portfolioRef}
                featuresRef={featuresRef}
                offeringsRef={offeringsRef}
            />
            <Offerings offeringsRef={offeringsRef} />
            <Portfolio portfolioRef={portfolioRef} />
            <Features featuresRef={featuresRef} />
            <Contact />
        </PublicLayout>
    );
};

export default Home;
