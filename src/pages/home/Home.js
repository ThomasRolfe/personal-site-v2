import React from "react";
import PublicLayout from "../../layout/PublicLayout";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";

const index = (props) => {
    return (
        <PublicLayout>
            <div className="bg-stripe-1 z-5"></div>
            <div className="bg-stripe-2 z-5"></div>
            <Hero />
            <Offerings />
        </PublicLayout>
    );
};

export default index;
