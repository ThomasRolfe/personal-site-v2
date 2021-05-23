import React from "react";
import PublicLayout from "../../layout/PublicLayout";
import ContactForm from "../components/contactForm";
import Contact from "../contact/Contact";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";
import Portfolio from "./components/Portfolio";

const Home = (props) => {
    return (
        <PublicLayout>
            <div className="bg-stripe-1 z-5" id="stripeLeft"></div>
            <div className="bg-stripe-2 z-5" id="stripeRight"></div>
            <Hero />
            <Offerings />
            <Portfolio />
            <Contact />
        </PublicLayout>
    );
};

export default Home;
