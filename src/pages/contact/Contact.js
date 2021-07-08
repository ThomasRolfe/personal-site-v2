import React from "react";
import PublicLayout from "../../layout/PublicLayout";
import { default as ContactComponent } from "../components/Contact";
import ClipSlant from "../components/ClipSlant";

const Contact = (props) => {
    return (
        <PublicLayout>
            <div className="bg-stripe-1 z-5" id="stripeLeft"></div>
            <div className="bg-stripe-2 z-5" id="stripeRight"></div>
            <section className="">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full  mt-12 md:mt-24 relative">
                    <h2 className="text-white text-4xl sm:text-7xl font-extrabold tracking-wide text-center py-8 md:my-12 fade-up">
                        Contact
                    </h2>
                </div>
            </section>
            <ClipSlant />
            <ContactComponent />
        </PublicLayout>
    );
};

export default Contact;
